import { BrevoClient } from '@getbrevo/brevo'
import { env } from './env'

let brevoClient: BrevoClient | null = null

function getBrevoClient(): BrevoClient {
  if (!env.BREVO_API_KEY) {
    throw new Error('Missing BREVO_API_KEY environment variable')
  }

  if (!brevoClient) {
    brevoClient = new BrevoClient({
      apiKey: env.BREVO_API_KEY,
      maxRetries: 3,
    })
  }

  return brevoClient
}

export default getBrevoClient
