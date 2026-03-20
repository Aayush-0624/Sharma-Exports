// controllers/requestController.js
const db = require("../config/db");

exports.createRequest = (req, res) => {
  const { product_id, quantity, message } = req.body;

  db.query(
    "INSERT INTO product_requests (user_id, product_id, quantity, message) VALUES (?, ?, ?, ?)",
    [req.user.id, product_id, quantity, message],
    (err) => {
      if (err) return res.status(500).json({ message: "DB error" });

      res.json({ message: "Request created" });
    }
  );
};

exports.getAllRequests = (req, res) => {
  db.query(`
    SELECT pr.*, u.email, p.name AS product_name
    FROM product_requests pr
    JOIN users u ON pr.user_id = u.id
    JOIN products p ON pr.product_id = p.id
  `, (err, result) => {
    res.json(result);
  });
};