// src/models/Subscriber.ts
import mongoose, { type Document, Schema } from 'mongoose'

export interface ISubscriber extends Document {
  email: string
  isActive: boolean
  brevoContactId?: string
  createdAt: Date
  updatedAt: Date
}

const SubscriberSchema = new Schema<ISubscriber>(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    isActive: { type: Boolean, default: true },
    brevoContactId: { type: String },
  },
  { timestamps: true }
)

export default mongoose.models.Subscriber
  || mongoose.model<ISubscriber>('Subscriber', SubscriberSchema)
