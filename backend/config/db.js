// const mysql = require("mysql2");

// const db = mysql.createConnection({
//   host: process.env.MYSQLHOST,
//   user: process.env.MYSQLUSER,
//   password: process.env.MYSQLPASSWORD,
//   database: process.env.MYSQLDATABASE,
//   port: process.env.MYSQLPORT
// });

// db.connect((err) => {
//   if (err) {
//     console.error("DB CONNECTION ERROR:", err);
//   } else {
//     console.log("Connected to Railway DB");
//   }
// });

// module.exports = db;
const mysql = require("mysql2");

const db = mysql.createConnection({
  host: process.env.MYSQLHOST || "localhost",
  user: process.env.MYSQLUSER || "root",
  password: process.env.MYSQLPASSWORD || "ayush06",
  database: process.env.MYSQLDATABASE || "sharma_export_db",
  port: process.env.MYSQLPORT || 3306
});

db.connect((err) => {
  if (err) {
    console.error("DB CONNECTION ERROR:", err);
  } else {
    console.log("Connected to DB");
  }
});

module.exports = db;