import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  userId: { type: String, unique: true },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  mobile: { type: String},
  resetToken: { type: String },
  resetTokenExpiry: { type: Date }
}, { timestamps: true });

export default mongoose.model('User', userSchema);

