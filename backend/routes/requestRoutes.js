const express = require("express");
const {
  createRequest,
  getAllRequests,
} = require("../controllers/requestController");

const router = express.Router();

// GET /api/requests -> get all service requests
router.get("/", getAllRequests);

// POST /api/requests -> create a new request
router.post("/", createRequest);

module.exports = router;
