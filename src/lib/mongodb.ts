import mongoose from 'mongoose'
import { env } from './env'
import { dbLogger } from './logger'

// Prevent multiple connections in dev (Next.js hot reload)
declare global {
  var mongooseCache: {
    conn: typeof import('mongoose') | null
    promise: Promise<typeof import('mongoose')> | null
  }
}

let cached = global.mongooseCache

if (!cached) {
  cached = global.mongooseCache = { conn: null, promise: null }
}

async function connectDB() {
  const MONGODB_URI = env.MONGODB_URI || ''

  if (!MONGODB_URI) {
    dbLogger.fatal('MONGODB_URI is not set')
    throw new Error('Missing MONGODB_URI environment variable')
  }

  if (cached.conn) return cached.conn

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, {
      bufferCommands: false,
    })
  }

  try {
    cached.conn = await cached.promise
    dbLogger.info('MongoDB connected')
  } catch (error) {
    cached.promise = null
    dbLogger.error({ err: error }, 'MongoDB connection failed')
    throw error
  }

  return cached.conn
}

export default connectDB
