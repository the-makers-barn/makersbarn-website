'use server'

import * as postmark from 'postmark'
import { revalidatePath } from 'next/cache'
import { createLogger, escapeHtml, type ValidatedContactFormData } from '@/lib'

const logger = createLogger('email-service')

const EMAIL_SUBJECTS = {
  ADMIN_NOTIFICATION: 'New Contact Form Submission - The Makers Barn',
  USER_CONFIRMATION: 'Thank you for contacting The Makers Barn',
} as const

interface EmailResult {
  success: boolean
  error?: unknown
}

interface EmailField {
  label: string
  value: string | undefined
}

function createEmailHtml(fields: EmailField[]): string {
  return fields
    .filter(({ value }) => value)
    .map(({ label, value }) => `<p><strong>${escapeHtml(label)}:</strong> ${escapeHtml(value!)}</p>`)
    .join('')
}

function createEmailText(fields: EmailField[]): string {
  return fields
    .filter(({ value }) => value)
    .map(({ label, value }) => `${label}: ${value}`)
    .join('\n')
}

function buildFormFields(data: ValidatedContactFormData): EmailField[] {
  return [
    { label: 'Name', value: data.name },
    { label: 'Email', value: data.email },
    { label: 'Phone', value: data.phone },
    { label: 'Message', value: data.message },
  ]
}

export async function sendEmail(formData: ValidatedContactFormData): Promise<EmailResult> {
  const apiToken = process.env.POSTMARKAPP_API_TOKEN
  const fromEmail = process.env.POSTMARK_FROM_EMAIL
  const toEmail = process.env.POSTMARK_TO_EMAIL

  if (!apiToken || !fromEmail || !toEmail) {
    logger.error('Missing Postmark configuration', {
      hasApiToken: !!apiToken,
      hasFromEmail: !!fromEmail,
      hasToEmail: !!toEmail,
    })
    return { success: false, error: 'Email service not configured' }
  }

  const client = new postmark.ServerClient(apiToken)
  const fields = buildFormFields(formData)

  // Support multiple recipients: comma-separated string or array
  // Postmark accepts both formats
  const toEmails = toEmail.includes(',') 
    ? toEmail.split(',').map(email => email.trim()).join(',')
    : toEmail

  logger.info('Sending contact form emails', { 
    userEmail: formData.email,
    adminRecipients: toEmails,
    recipientCount: toEmails.split(',').length 
  })

  try {
    // Send notification email to admin(s)
    const adminEmailResponse = await client.sendEmail({
      From: fromEmail,
      To: toEmails,
      Subject: EMAIL_SUBJECTS.ADMIN_NOTIFICATION,
      HtmlBody: `
        <h2>New Contact Form Submission</h2>
        <p>You have received a new inquiry from the website contact form.</p>
        <hr />
        ${createEmailHtml(fields)}
      `,
      TextBody: `
New Contact Form Submission
============================

You have received a new inquiry from the website contact form.

${createEmailText(fields)}
      `.trim(),
    })

    // Check if Postmark returned an error code
    if (adminEmailResponse.ErrorCode && adminEmailResponse.ErrorCode !== 0) {
      logger.error('Admin notification email failed', {
        to: toEmails,
        errorCode: adminEmailResponse.ErrorCode,
        message: adminEmailResponse.Message,
      })
      // Continue to send user confirmation even if admin email fails
    } else {
      logger.info('Admin notification email sent', {
        to: toEmails,
        messageId: adminEmailResponse.MessageID,
        submittedAt: adminEmailResponse.SubmittedAt,
        errorCode: adminEmailResponse.ErrorCode,
      })
    }

    // Send confirmation email to user
    if (formData.email) {
      const userEmailResponse = await client.sendEmail({
        From: fromEmail,
        To: formData.email,
        Subject: EMAIL_SUBJECTS.USER_CONFIRMATION,
        HtmlBody: `
          <h2>Thank you for contacting The Makers Barn</h2>
          <p>We have received your message and will get back to you shortly.</p>
          <h3>Your submission details:</h3>
          ${createEmailHtml(fields)}
          <hr />
          <p>Best regards,<br />The Makers Barn Team</p>
        `,
        TextBody: `
Thank you for contacting The Makers Barn
=========================================

We have received your message and will get back to you shortly.

Your submission details:
${createEmailText(fields)}

Best regards,
The Makers Barn Team
        `.trim(),
      })

      logger.info('User confirmation email sent', {
        to: formData.email,
        messageId: userEmailResponse.MessageID,
        submittedAt: userEmailResponse.SubmittedAt,
        errorCode: userEmailResponse.ErrorCode,
      })
    }

    revalidatePath('/contact')
    return { success: true }
  } catch (error) {
    logger.error('Failed to send email', { userEmail: formData.email }, error)
    return { success: false, error }
  }
}
