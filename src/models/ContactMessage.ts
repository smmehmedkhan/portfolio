// src/models/ContactMessage.ts
import mongoose, { type Document, Schema } from 'mongoose'

export interface IContactMessage extends Document {
  name: string
  email: string
  subject: string
  message: string
  status: 'pending' | 'replied' | 'archived'
  createdAt: Date
}

const ContactMessageSchema = new Schema<IContactMessage>(
  {
    name: { type: String, required: true, trim: true, maxlength: 100 },
    email: { type: String, required: true, trim: true, lowercase: true },
    subject: { type: String, required: true, trim: true, maxlength: 200 },
    message: { type: String, required: true, trim: true, maxlength: 5000 },
    status: {
      type: String,
      enum: ['pending', 'replied', 'archived'],
      default: 'pending',
    },
  },
  { timestamps: true }
)

export default mongoose.models.ContactMessage
  || mongoose.model<IContactMessage>('ContactMessage', ContactMessageSchema)
