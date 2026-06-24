import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import recipeRoutes from "./routes/recipeRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/recipes", recipeRoutes);

// MongoDB connect
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.listen(5000, () => {
  console.log("Server running on port 5000");
});