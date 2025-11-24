const mongoose = require('mongoose');

const serviceRequestSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String },          
    priority: {
      type: String,
      enum: ['Low', 'Medium', 'High', 'CRITICAL'],
      default: 'Medium',
      required: true,
    },
    status: {
      type: String,
      enum: ['Pending', 'In Progress', 'Completed'],
      default: 'Pending',
    },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  },
  { timestamps: true }            
);

module.exports = mongoose.model('ServiceRequest', serviceRequestSchema);
