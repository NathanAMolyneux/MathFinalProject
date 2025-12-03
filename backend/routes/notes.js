const express = require("express");
const Note = require("../models/Note");

const router = express.Router();

// GET /api/notes  -> list of topics for dashboard
router.get("/", async (req, res) => {
  try {
    const notes = await Note.find().sort({ topicOrder: 1, title: 1 });
    res.json(notes);
  } catch (err) {
    console.error("Error fetching notes:", err);
    res.status(500).json({ message: "Error fetching notes" });
  }
});

// GET /api/notes/:slug  -> single topic page
router.get("/:slug", async (req, res) => {
  try {
    const note = await Note.findOne({ slug: req.params.slug });
    if (!note) {
      return res.status(404).json({ message: "Note not found" });
    }
    res.json(note);
  } catch (err) {
    console.error("Error fetching note:", err);
    res.status(500).json({ message: "Error fetching note" });
  }
});

// POST /api/notes  -> create a note (for seeding/admin)
router.post("/", async (req, res) => {
  const { title, slug, content, topicOrder } = req.body;

  try {
    const note = await Note.create({ title, slug, content, topicOrder });
    res.status(201).json(note);
  } catch (err) {
    console.error("Error creating note:", err);
    res.status(400).json({ message: "Error creating note" });
  }
});

// PUT /api/notes/:slug  -> update a note
router.put("/:slug", async (req, res) => {
  const { title, content, topicOrder } = req.body;

  try {
    const note = await Note.findOneAndUpdate(
      { slug: req.params.slug },
      { title, content, topicOrder },
      { new: true }
    );
    if (!note) return res.status(404).json({ message: "Note not found" });
    res.json(note);
  } catch (err) {
    console.error("Error updating note:", err);
    res.status(400).json({ message: "Error updating note" });
  }
});

// DELETE /api/notes/:slug  -> delete a note (optional)
router.delete("/:slug", async (req, res) => {
  try {
    const note = await Note.findOneAndDelete({ slug: req.params.slug });
    if (!note) return res.status(404).json({ message: "Note not found" });
    res.json({ message: "Note deleted" });
  } catch (err) {
    console.error("Error deleting note:", err);
    res.status(400).json({ message: "Error deleting note" });
  }
});

module.exports = router;
