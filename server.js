
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const productRoutes = require("./routes/products");

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/api/products", productRoutes);

// Centralized error handling
app.use((err, req, res, next) => {
  console.error(err.message);

  if (err.name === "ValidationError") {
    return res.status(400).json({
      message: err.message
    });
  }

  if (err.code === 11000) {
    return res.status(400).json({
      message: "SKU already exists"
    });
  }

  if (
    err.name === "CastError" ||
    err.name === "BSONError"
  ) {
    return res.status(400).json({
      message: "Invalid product ID"
    });
  }

  res.status(500).json({
    message: "Internal Server Error"
  });
});

// Database connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected Successfully");

    app.listen(process.env.PORT || 5000, () => {
      console.log("Server running on port 5000");
    });
  })
  .catch((error) => {
    console.error("Database connection failed:", error);
  });
