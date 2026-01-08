export interface ContactFormData {
  name: string
  email: string
  phone: string
  message: string
}

export enum FormStatus {
  IDLE = 'idle',
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export enum ContactIntent {
  QUESTION = 'question',
  BOOKING = 'booking',
}
