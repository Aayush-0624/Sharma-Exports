// controllers/productController.js
const db = require("../config/db");

exports.addProduct = (req, res) => {
  const { name, description, price, category, image } = req.body;

  db.query(
    "INSERT INTO products (name, description, price, category, image, seller_id) VALUES (?, ?, ?, ?, ?, ?)",
    [name, description, price, category, image, req.user.id],
    (err) => {
      if (err) return res.status(500).json({ message: "DB error" });

      res.json({ message: "Product added" });
    }
  );
};

exports.getProducts = (req, res) => {
  db.query("SELECT * FROM products", (err, result) => {
    res.json(result);
  });
};