const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema(
  {
    title: { type: String, required: true }, // e.g., "Convergence Tests"
    slug: { type: String, required: true, unique: true }, // e.g., "convergence-tests"
    content: { type: String, required: true }, // plain text or markdown
    topicOrder: { type: Number, default: 0 }, // for sorting topics in the dashboard
    // optional: tie to a user if you want per-user notes later
    owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Note", noteSchema);
