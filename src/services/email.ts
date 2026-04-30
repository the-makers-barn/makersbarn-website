'use server'

import * as postmark from 'postmark'
import { revalidatePath } from 'next/cache'

import { createLogger, escapeHtml, formatGroupSize, getRetreatTypeDisplayLabel, type ValidatedContactFormData } from '@/lib'
import type { Chef, Language, ValidatedBookingFormData } from '@/types'

const logger = createLogger('email-service')

const EMAIL_SUBJECTS = {
  ADMIN_NOTIFICATION: 'New Contact Form Submission - The Makers Barn',
  USER_CONFIRMATION: 'Thank you for contacting The Makers Barn',
  BOOKING_ADMIN_NOTIFICATION: 'New Booking Request - The Makers Barn',
  BOOKING_USER_CONFIRMATION: 'Thank you for your booking request - The Makers Barn',
  CHEF_INQUIRY_TO_CHEF: (visitorName: string) => `New retreat inquiry from ${visitorName} via MakersBarn`,
  CHEF_INQUIRY_TO_VISITOR: (chefName: string) => `Your inquiry to ${chefName} is on its way`,
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
    .map(({ label, value }) => `<p><strong>${escapeHtml(label)}:</strong> ${escapeHtml(value ?? '')}</p>`)
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
  const senderEmail = process.env.POSTMARK_SENDER_EMAIL
  const adminEmail = process.env.POSTMARK_ADMIN_EMAIL

  if (!apiToken || !senderEmail || !adminEmail) {
    logger.error('Missing Postmark configuration', {
      hasApiToken: !!apiToken,
      hasSenderEmail: !!senderEmail,
      hasAdminEmail: !!adminEmail,
    })
    return { success: false, error: 'Email service not configured' }
  }

  const client = new postmark.ServerClient(apiToken)
  const fields = buildFormFields(formData)

  // Support multiple recipients: comma-separated string or array
  // Postmark accepts both formats
  const adminEmails = adminEmail.includes(',') 
    ? adminEmail.split(',').map(email => email.trim()).join(',')
    : adminEmail

  logger.info('Sending contact form emails', { 
    userEmail: formData.email,
    adminRecipients: adminEmails,
    recipientCount: adminEmails.split(',').length 
  })

  try {
    // Send notification email to admin(s)
    const adminEmailResponse = await client.sendEmail({
      From: senderEmail,
      To: adminEmails,
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
        to: adminEmails,
        errorCode: adminEmailResponse.ErrorCode,
        message: adminEmailResponse.Message,
      })
      return { 
        success: false, 
        error: `Admin notification email failed: ${adminEmailResponse.Message || 'Unknown error'}` 
      }
    }

    logger.info('Admin notification email sent', {
      to: adminEmails,
      messageId: adminEmailResponse.MessageID,
      submittedAt: adminEmailResponse.SubmittedAt,
      errorCode: adminEmailResponse.ErrorCode,
    })

    // Send confirmation email to user
    if (formData.email) {
      const userEmailResponse = await client.sendEmail({
        From: senderEmail,
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

      if (userEmailResponse.ErrorCode && userEmailResponse.ErrorCode !== 0) {
        logger.warn('User confirmation email failed', {
          to: formData.email,
          errorCode: userEmailResponse.ErrorCode,
          message: userEmailResponse.Message,
        })
      } else {
        logger.info('User confirmation email sent', {
          to: formData.email,
          messageId: userEmailResponse.MessageID,
          submittedAt: userEmailResponse.SubmittedAt,
        })
      }
    }

    revalidatePath('/contact')
    return { success: true }
  } catch (error) {
    logger.error('Failed to send email', { userEmail: formData.email }, error)
    return { success: false, error }
  }
}

function buildBookingFields(data: ValidatedBookingFormData): EmailField[] {
  const retreatTypeLabel = getRetreatTypeDisplayLabel(data.retreatType, data.retreatTypeOther)
  const groupSize = formatGroupSize(data.minGroupSize, data.maxGroupSize)

  let dateInfo: string | undefined
  if (data.startDate) {
    if (data.flexibleDates && data.flexibleDatesText) {
      dateInfo = `${data.startDate} (flexible: ${data.flexibleDatesText})`
    } else if (data.flexibleDates) {
      dateInfo = `${data.startDate} (flexible)`
    } else {
      dateInfo = data.startDate
    }
  } else if (data.flexibleDates && data.flexibleDatesText) {
    dateInfo = `Flexible: ${data.flexibleDatesText}`
  } else {
    dateInfo = undefined
  }

  return [
    { label: 'Name', value: data.name },
    { label: 'Email', value: data.email },
    { label: 'Phone', value: data.phone },
    { label: 'Preferred Dates', value: dateInfo },
    { label: 'Duration', value: data.duration ? `${data.duration} days` : undefined },
    { label: 'Group Size', value: groupSize },
    { label: 'Retreat Type', value: retreatTypeLabel },
    { label: 'Accommodation Preferences', value: data.accommodationPreferences },
    { label: 'Catering', value: data.cateringNeeded ? 'Yes' : undefined },
    { label: 'Catering Details', value: data.cateringDetails },
    { label: 'Extra Information', value: data.extraInfo },
  ]
}

export async function sendBookingEmail(formData: ValidatedBookingFormData): Promise<EmailResult> {
  const apiToken = process.env.POSTMARKAPP_API_TOKEN
  const senderEmail = process.env.POSTMARK_SENDER_EMAIL
  const adminEmail = process.env.POSTMARK_ADMIN_EMAIL

  if (!apiToken || !senderEmail || !adminEmail) {
    logger.error('Missing Postmark configuration for booking email', {
      hasApiToken: !!apiToken,
      hasSenderEmail: !!senderEmail,
      hasAdminEmail: !!adminEmail,
    })
    return { success: false, error: 'Email service not configured' }
  }

  const client = new postmark.ServerClient(apiToken)
  const fields = buildBookingFields(formData)

  const adminEmails = adminEmail.includes(',')
    ? adminEmail.split(',').map(email => email.trim()).join(',')
    : adminEmail

  logger.info('Sending booking request emails', {
    userEmail: formData.email,
    adminRecipients: adminEmails,
    retreatType: formData.retreatType,
  })

  try {
    // Send notification email to admin(s)
    const adminEmailResponse = await client.sendEmail({
      From: senderEmail,
      To: adminEmails,
      Subject: EMAIL_SUBJECTS.BOOKING_ADMIN_NOTIFICATION,
      HtmlBody: `
        <h2>New Booking Request</h2>
        <p>You have received a new booking request from the website.</p>
        <hr />
        ${createEmailHtml(fields)}
      `,
      TextBody: `
New Booking Request
============================

You have received a new booking request from the website.

${createEmailText(fields)}
      `.trim(),
    })

    if (adminEmailResponse.ErrorCode && adminEmailResponse.ErrorCode !== 0) {
      logger.error('Admin booking notification email failed', {
        to: adminEmails,
        errorCode: adminEmailResponse.ErrorCode,
        message: adminEmailResponse.Message,
      })
      return {
        success: false,
        error: `Admin notification email failed: ${adminEmailResponse.Message || 'Unknown error'}`,
      }
    }

    logger.info('Admin booking notification email sent', {
      to: adminEmails,
      messageId: adminEmailResponse.MessageID,
    })

    // Send confirmation email to user
    if (formData.email) {
      try {
        const userEmailResponse = await client.sendEmail({
          From: senderEmail,
          To: formData.email,
          Subject: EMAIL_SUBJECTS.BOOKING_USER_CONFIRMATION,
          HtmlBody: `
            <h2>Thank you for your booking request</h2>
            <p>We have received your retreat booking request and will review your details shortly.</p>
            <p>One of our team members will get back to you within 24-48 hours with availability and pricing information.</p>
            <h3>Your booking request details:</h3>
            ${createEmailHtml(fields)}
            <hr />
            <p>Best regards,<br />The Makers Barn Team</p>
          `,
          TextBody: `
Thank you for your booking request
===================================

We have received your retreat booking request and will review your details shortly.

One of our team members will get back to you within 24-48 hours with availability and pricing information.

Your booking request details:
${createEmailText(fields)}

Best regards,
The Makers Barn Team
          `.trim(),
        })

        // Check if user confirmation email failed
        if (userEmailResponse.ErrorCode !== 0) {
          logger.warn('User booking confirmation email failed', {
            to: formData.email,
            errorCode: userEmailResponse.ErrorCode,
            message: userEmailResponse.Message,
          })
          // Don't fail the entire operation - admin was notified, user can be contacted
        } else {
          logger.info('User booking confirmation email sent', {
            to: formData.email,
            messageId: userEmailResponse.MessageID,
          })
        }
      } catch (userEmailError) {
        // Log but don't fail - admin notification succeeded
        logger.warn('User booking confirmation email failed unexpectedly', {
          to: formData.email,
        }, userEmailError)
      }
    }

    revalidatePath('/book')
    return { success: true }
  } catch (error) {
    logger.error('Failed to send booking email', { userEmail: formData.email }, error)
    return { success: false, error }
  }
}

export type ChefInquiryEmailInput = {
  chef: Chef
  visitorName: string
  visitorEmail: string
  dates: string
  groupSize: number
  location: string
  dietary: string
  message: string
  visitorLocale: Language
  chefDetailUrl: string
}

function buildChefEmailHtml(input: ChefInquiryEmailInput): string {
  const dietaryLine = input.dietary ? escapeHtml(input.dietary) : '—'
  const escapedUrl = escapeHtml(input.chefDetailUrl)
  return `
    <p>You have a new retreat inquiry via your MakersBarn directory page.</p>
    <table style="border-collapse:collapse">
      <tr><td><strong>Name:</strong></td><td>${escapeHtml(input.visitorName)}</td></tr>
      <tr><td><strong>Email:</strong></td><td>${escapeHtml(input.visitorEmail)}</td></tr>
      <tr><td><strong>Group size:</strong></td><td>${input.groupSize}</td></tr>
      <tr><td><strong>Dates:</strong></td><td>${escapeHtml(input.dates)}</td></tr>
      <tr><td><strong>Location:</strong></td><td>${escapeHtml(input.location)}</td></tr>
      <tr><td><strong>Dietary:</strong></td><td>${dietaryLine}</td></tr>
    </table>
    <p><strong>Message:</strong></p>
    <pre style="white-space:pre-wrap;font-family:inherit">${escapeHtml(input.message)}</pre>
    <hr />
    <p style="font-size:12px;color:#666">
      This inquiry came via <a href="${escapedUrl}">${escapedUrl}</a>.
      Reply directly to ${escapeHtml(input.visitorEmail)} to take the conversation off-platform.
      A copy was sent to MakersBarn for our records.
    </p>
  `.trim()
}

function buildVisitorEmailHtml(input: ChefInquiryEmailInput): string {
  return `
  <p>Hi ${escapeHtml(input.visitorName)},</p>
  <p>Thanks for reaching out via MakersBarn — your inquiry has been forwarded to ${escapeHtml(input.chef.name)}.</p>
  <p>${escapeHtml(input.chef.name)} usually responds within 2–3 days. If you don't hear back, just reply to this email and we'll follow up on your behalf.</p>
  <p>— The MakersBarn team</p>
`.trim()
}

function normalizeRecipients(raw: string): string {
  return raw.includes(',')
    ? raw.split(',').map(addr => addr.trim()).join(',')
    : raw
}

export async function sendChefInquiryEmails(
  input: ChefInquiryEmailInput
): Promise<{ success: boolean; error?: string; visitorConfirmationFailed?: boolean }> {
  const apiToken = process.env.POSTMARKAPP_API_TOKEN
  const sender = process.env.POSTMARK_SENDER_EMAIL
  const adminEmail = process.env.POSTMARK_ADMIN_EMAIL

  if (!apiToken || !sender || !adminEmail) {
    return { success: false, error: 'missing_postmark_config' }
  }

  const client = new postmark.ServerClient(apiToken)
  const normalizedAdminEmail = normalizeRecipients(adminEmail)

  try {
    await client.sendEmail({
      From: sender,
      To: input.chef.inquiryEmail,
      Cc: normalizedAdminEmail,
      ReplyTo: input.visitorEmail,
      Subject: EMAIL_SUBJECTS.CHEF_INQUIRY_TO_CHEF(input.visitorName),
      HtmlBody: buildChefEmailHtml(input),
      MessageStream: 'outbound',
    })
  } catch (err) {
    return { success: false, error: err instanceof Error ? err.message : 'chef_email_failed' }
  }

  try {
    await client.sendEmail({
      From: sender,
      To: input.visitorEmail,
      Subject: EMAIL_SUBJECTS.CHEF_INQUIRY_TO_VISITOR(input.chef.name),
      HtmlBody: buildVisitorEmailHtml(input),
      MessageStream: 'outbound',
    })
  } catch (err) {
    return { success: true, visitorConfirmationFailed: true, error: err instanceof Error ? err.message : 'visitor_email_failed' }
  }

  return { success: true }
}
