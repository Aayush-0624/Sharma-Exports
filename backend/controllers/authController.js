// controllers/authController.js
const db = require("../config/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  const { name, email, phone, password } = req.body;

  if (!email.includes("@")) {
    return res.status(400).json({ message: "Invalid email" });
  }

  if (password.length < 6) {
    return res.status(400).json({ message: "Weak password" });
  }

  const hashed = await bcrypt.hash(password, 10);

  db.query(
    "INSERT INTO users (name, email, phone, password, role) VALUES (?, ?, ?, ?, ?)",
    [name, email, phone, hashed, "user"],
    (err) => {
      if (err) return res.status(500).json({ message: "DB error" });

      res.json({ message: "Registered successfully" });
    }
  );
};

exports.login = (req, res) => {
  const { email, password } = req.body;

  // 🔍 Debug
  // console.log("Login body:", req.body);

  db.query(
    "SELECT * FROM users WHERE email = ?",
    [email],
    async (err, result) => {

      // ❗ HANDLE DB ERROR
      if (err) {
        console.error("DB ERROR:", err);
        return res.status(500).json({ message: "Database error" });
      }

      // ❗ CHECK USER EXISTS
      if (!result || result.length === 0) {
        return res.status(400).json({ message: "User not found" });
      }

      try {
        const user = result[0];

        // ❗ CHECK PASSWORD
        const match = await bcrypt.compare(password, user.password);

        if (!match) {
          return res.status(400).json({ message: "Wrong password" });
        }

        // ❗ CHECK JWT SECRET
        if (!process.env.JWT_SECRET) {
          console.error("JWT_SECRET missing");
          return res.status(500).json({ message: "Server config error" });
        }

        // ❗ CREATE TOKEN
        const token = jwt.sign(
          { id: user.id, role: user.role },
          process.env.JWT_SECRET,
          { expiresIn: "1d" }
        );

        res.json({ token, user });

      } catch (error) {
        console.error("LOGIN ERROR:", error);
        res.status(500).json({ message: "Server error" });
      }
    }
  );
};