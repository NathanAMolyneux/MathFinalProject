const ServiceRequest = require("../models/ServiceRequest");

// GET /api/requests
async function getAllRequests(req, res, next) {
  try {
    const requests = await ServiceRequest.find().sort({ createdAt: -1 });
    res.json({ success: true, data: requests });
  } catch (err) {
    next(err);
  }
}

// POST /api/requests
async function createRequest(req, res, next) {
  try {
    const request = await ServiceRequest.create({
      title: req.body.title,
      description: req.body.description,
      category: req.body.category,
      priority: req.body.priority,
      location: req.body.location,
      contactPreference: req.body.contactPreference,
      status: "Pending",
    });

    res.status(201).json({ success: true, data: request });
  } catch (err) {
    next(err);
  }
}

// IMPORTANT: export both functions as properties
module.exports = {
  getAllRequests,
  createRequest,
};
