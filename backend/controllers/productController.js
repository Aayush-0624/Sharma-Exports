// controllers/productController.js
const db = require("../config/db");


// ➕ ADD PRODUCT (Admin only)
exports.addProduct = (req, res) => {
  const { name, description, price, category, image } = req.body;

  // validation (optional but recommended)
  if (!name || !price) {
    return res.status(400).json({ message: "Name and price are required" });
  }

  db.query(
    "INSERT INTO products (name, description, price, category, image, seller_id) VALUES (?, ?, ?, ?, ?, ?)",
    [name, description, price, category, image, req.user.id],
    (err, result) => {
      if (err) {
        console.error("ADD PRODUCT ERROR:", err);
        return res.status(500).json({ message: "Database error" });
      }

      res.status(201).json({
        message: "Product added successfully",
        productId: result.insertId
      });
    }
  );
};



// 📦 GET ALL PRODUCTS
exports.getProducts = (req, res) => {
  db.query("SELECT * FROM products", (err, results) => {
    if (err) {
      console.error("GET PRODUCTS ERROR:", err);
      return res.status(500).json({ error: "Database error" });
    }

    res.json(results);
  });
};



// 🔍 GET SINGLE PRODUCT (optional)
exports.getProductById = (req, res) => {
  const { id } = req.params;

  db.query("SELECT * FROM products WHERE id = ?", [id], (err, results) => {
    if (err) {
      console.error("GET PRODUCT ERROR:", err);
      return res.status(500).json({ error: "Database error" });
    }

    if (results.length === 0) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json(results[0]);
  });
};



// ❌ DELETE PRODUCT (optional)
exports.deleteProduct = (req, res) => {
  const { id } = req.params;

  db.query("DELETE FROM products WHERE id = ?", [id], (err, result) => {
    if (err) {
      console.error("DELETE ERROR:", err);
      return res.status(500).json({ error: "Database error" });
    }

    res.json({ message: "Product deleted successfully" });
  });
};