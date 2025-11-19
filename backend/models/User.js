const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
  username: { 
    type: String, 
    required: true, 
    unique: true 
  },
  email: { 
    type: String, 
    required: true, 
    unique: true 
  },
  password: { 
    type: String, 
    required: true 
  },
  // --- SRMS Roles & Info ---
  role: {
    type: String,
    enum: ['student', 'faculty', 'admin', 'staff'],
    default: 'student'
  },
  phone: { 
    type: String, 
    required: true 
  },
  enumber: { 
    type: String, 
    required: true, 
    unique: true 
  },
  dob: { 
    type: Date, 
    required: true 
  },
  createdAt: { 
    type: Date, 
    default: Date.now 
  }
});

// --- AUTO-ENCRYPT PASSWORD BEFORE SAVING ---
UserSchema.pre('save', async function(next) {
  // If password is not modified (e.g., just updating phone number), skip hashing
  if (!this.isModified('password')) return next();

  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

module.exports = mongoose.model('User', UserSchema);