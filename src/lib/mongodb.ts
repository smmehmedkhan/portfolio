import mongoose from 'mongoose'
import { env } from './env'

const MONGODB_URI = env.MONGODB_URI || ''

if (!MONGODB_URI) {
  throw new Error('Missing MONGODB_URI environment variable')
}

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
  if (cached.conn) return cached.conn

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, {
      bufferCommands: false,
    })
  }

  cached.conn = await cached.promise
  return cached.conn
}

export default connectDB
