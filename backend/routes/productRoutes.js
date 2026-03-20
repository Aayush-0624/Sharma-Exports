const express = require("express");
const { addProduct, getProducts } = require("../controllers/productController");
const { verifyToken } = require("../middleware/authMiddleware");
const { isAdmin } = require("../middleware/roleMiddleware");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

router.get("/", getProducts);
router.post("/", verifyToken, isAdmin, addProduct);

module.exports = router;