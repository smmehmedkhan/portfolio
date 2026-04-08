import pino from 'pino'
import { env } from './env'

const isDev = env.NODE_ENV === 'development'

const logger = pino({
  level: env.LOG_LEVEL,
  ...(isDev && {
    transport: {
      target: 'pino-pretty',
      options: {
        colorize: true,
        translateTime: 'SYS:HH:MM:ss',
        ignore: 'pid,hostname',
      },
    },
  }),
  formatters: {
    level: label => ({ level: label }),
  },
  base: { env: env.NODE_ENV },
})

export const dbLogger = logger.child({ module: 'mongodb' })
export const brevoLogger = logger.child({ module: 'brevo' })
export const arcjetLogger = logger.child({ module: 'arcjet' })
export const apiLogger = logger.child({ module: 'api' })

export default logger
