import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import recipeRoutes from "./routes/recipeRoutes.js";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/recipes", recipeRoutes);


const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => {
    console.log("MongoDB Connection Error:", err);
  });

// Health check route (VERY IMPORTANT for deployment)
app.get("/", (req, res) => {
  res.send("API is running ");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
