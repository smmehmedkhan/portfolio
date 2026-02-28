import { BrevoClient } from '@getbrevo/brevo'

if (!process.env.BREVO_API_KEY) {
  throw new Error('Missing BREVO_API_KEY environment variable')
}

const brevo = new BrevoClient({
  apiKey: process.env.BREVO_API_KEY,
  maxRetries: 3,
})

export default brevo
