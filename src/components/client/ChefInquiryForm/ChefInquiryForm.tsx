'use client'

import { useActionState, useState } from 'react'

import type { SendChefInquiryResult } from '@/actions/chef/sendChefInquiry'
import { sendChefInquiry } from '@/actions/chef/sendChefInquiry'
import { CHEF_INQUIRY_LIMITS } from '@/constants/chef'
import type { Chef, ChefInquiryDict, Language } from '@/types'

import styles from './ChefInquiryForm.module.css'

type Props = { chef: Chef; lang: Language; inquiryDict: ChefInquiryDict }

const interpolate = (template: string, vars: Record<string, string>): string =>
  Object.entries(vars).reduce((s, [k, v]) => s.replace(`{${k}}`, v), template)

const resolveErrorMessage = (
  message: string,
  errors: ChefInquiryDict['errors'],
): string => {
  const key = message as keyof ChefInquiryDict['errors']
  return key in errors ? errors[key] : errors.unexpected_error
}

function buildSubmitAction(
  slug: string,
  lang: Language,
  onSubmittedEmail: (email: string) => void,
) {
  return async (_prev: SendChefInquiryResult | null, formData: FormData): Promise<SendChefInquiryResult> => {
    formData.set('locale', lang)
    const result = await sendChefInquiry(slug, formData)
    if (result.success) {
      const email = formData.get('email')
      if (typeof email === 'string') { onSubmittedEmail(email) }
    }
    return result
  }
}

type FieldErrorProps = { id: string; message: string | undefined }

function FieldError({ id, message }: FieldErrorProps) {
  if (!message) { return null }
  return <span id={id} className={styles.error}>{message}</span>
}

type FieldsProps = {
  fieldDict: ChefInquiryDict['field']
  errors: Record<string, string> | undefined
  messageLabel: string
}

function FormFields({ fieldDict, errors, messageLabel }: FieldsProps) {
  return (
    <>
      <label className={styles.field}>
        <span className={styles.label}>{fieldDict.name}</span>
        <input
          type="text"
          name="name"
          required
          autoFocus
          minLength={CHEF_INQUIRY_LIMITS.NAME_MIN}
          maxLength={CHEF_INQUIRY_LIMITS.NAME_MAX}
          aria-invalid={Boolean(errors?.name)}
          aria-describedby={errors?.name ? 'name-err' : undefined}
        />
        <FieldError id="name-err" message={errors?.name} />
      </label>

      <label className={styles.field}>
        <span className={styles.label}>{fieldDict.email}</span>
        <input
          type="email"
          name="email"
          required
          maxLength={CHEF_INQUIRY_LIMITS.EMAIL_MAX}
          aria-invalid={Boolean(errors?.email)}
          aria-describedby={errors?.email ? 'email-err' : undefined}
        />
        <FieldError id="email-err" message={errors?.email} />
      </label>

      <label className={styles.field}>
        <span className={styles.label}>{fieldDict.dates}</span>
        <input
          type="text"
          name="dates"
          required
          minLength={CHEF_INQUIRY_LIMITS.DATES_MIN}
          maxLength={CHEF_INQUIRY_LIMITS.DATES_MAX}
          placeholder={fieldDict.datesPlaceholder}
        />
      </label>

      <label className={styles.field}>
        <span className={styles.label}>{fieldDict.groupSize}</span>
        <input
          type="number"
          name="groupSize"
          required
          min={CHEF_INQUIRY_LIMITS.GROUP_SIZE_MIN}
          max={CHEF_INQUIRY_LIMITS.GROUP_SIZE_MAX}
        />
      </label>

      <label className={styles.field}>
        <span className={styles.label}>{fieldDict.location}</span>
        <input
          type="text"
          name="location"
          required
          minLength={CHEF_INQUIRY_LIMITS.LOCATION_MIN}
          maxLength={CHEF_INQUIRY_LIMITS.LOCATION_MAX}
        />
      </label>

      <label className={styles.field}>
        <span className={styles.label}>{fieldDict.dietary}</span>
        <textarea name="dietary" maxLength={CHEF_INQUIRY_LIMITS.DIETARY_MAX} rows={2} />
      </label>

      <label className={styles.field}>
        <span className={styles.label}>{messageLabel}</span>
        <textarea
          name="message"
          required
          minLength={CHEF_INQUIRY_LIMITS.MESSAGE_MIN}
          maxLength={CHEF_INQUIRY_LIMITS.MESSAGE_MAX}
          rows={5}
        />
      </label>
    </>
  )
}

type FooterProps = {
  consentLabel: string
  errorMessage: string | null
  pending: boolean
  submitLabel: string
  submittingLabel: string
}

function FormFooter({ consentLabel, errorMessage, pending, submitLabel, submittingLabel }: FooterProps) {
  return (
    <>
      <label className={styles.consent}>
        <input type="checkbox" name="consent" value="true" required />
        <span>{consentLabel}</span>
      </label>

      {errorMessage && (
        <div className={styles.banner} role="alert">{errorMessage}</div>
      )}

      <button type="submit" disabled={pending} className={styles.submit}>
        {pending ? submittingLabel : submitLabel}
      </button>
    </>
  )
}

type SuccessPanelProps = { title: string; body: string }

function SuccessPanel({ title, body }: SuccessPanelProps) {
  return (
    <div className={styles.successPanel} role="status">
      <p className={styles.successTitle}>{title}</p>
      <p className={styles.successBody}>{body}</p>
    </div>
  )
}

export function ChefInquiryForm({ chef, lang, inquiryDict }: Props) {
  const [submittedEmail, setSubmittedEmail] = useState<string | null>(null)
  const [state, formAction, pending] = useActionState<SendChefInquiryResult | null, FormData>(
    buildSubmitAction(chef.slug, lang, setSubmittedEmail),
    null,
  )

  if (state?.success && submittedEmail !== null) {
    const successTitle = interpolate(inquiryDict.success.title, { name: chef.name })
    const successBody = interpolate(inquiryDict.success.body, { name: chef.name, email: submittedEmail })
    return <SuccessPanel title={successTitle} body={successBody} />
  }

  const messageLabel = interpolate(inquiryDict.field.message, { name: chef.name })
  const consentLabel = interpolate(inquiryDict.consent, { name: chef.name })
  const errorMessage =
    state && !state.success && state.message
      ? resolveErrorMessage(state.message, inquiryDict.errors)
      : null

  return (
    <form action={formAction} className={styles.form} noValidate>
      <input
        type="text"
        name="honeypot"
        className={styles.honeypot}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />
      <FormFields fieldDict={inquiryDict.field} errors={state?.errors} messageLabel={messageLabel} />
      <FormFooter
        consentLabel={consentLabel}
        errorMessage={errorMessage}
        pending={pending}
        submitLabel={inquiryDict.submit}
        submittingLabel={inquiryDict.submitting}
      />
    </form>
  )
}
