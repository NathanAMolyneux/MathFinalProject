const express = require("express");
const router = express.Router();

const {
  createRequest,
  getAllRequests,
} = require("../controllers/requestController");

console.log("createRequest type:", typeof createRequest);
console.log("getAllRequests type:", typeof getAllRequests);

router.get("/", getAllRequests);


router.post("/", createRequest);

module.exports = router;
