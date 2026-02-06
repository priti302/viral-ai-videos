require("dotenv").config(); // MUST be first

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();

app.use(cors());
app.use(express.json());

// 🔥 MongoDB connect
connectDB();

app.use("/api/auth", require("./routes/auth"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});