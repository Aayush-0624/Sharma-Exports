const express = require("express");
const { createRequest, getAllRequests } = require("../controllers/requestController");
const { verifyToken } = require("../middleware/authMiddleware");
const { isAdmin } = require("../middleware/roleMiddleware");

const router = express.Router();

router.post("/", verifyToken, createRequest);
router.get("/", verifyToken, isAdmin, getAllRequests);

module.exports = router;