import { BrevoClient } from '@getbrevo/brevo'
import { env } from './env'
import { brevoLogger } from './logger'

let brevoClient: BrevoClient | null = null

function getBrevoClient(): BrevoClient {
  if (!env.BREVO_API_KEY) {
    brevoLogger.fatal('BREVO_API_KEY is not set')
    throw new Error('Missing BREVO_API_KEY environment variable')
  }

  if (!brevoClient) {
    brevoClient = new BrevoClient({
      apiKey: env.BREVO_API_KEY,
      maxRetries: 3,
    })
    brevoLogger.info('Brevo client initialized')
  }

  return brevoClient
}

export default getBrevoClient
