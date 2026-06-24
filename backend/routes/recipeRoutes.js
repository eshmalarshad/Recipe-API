import express from "express";
import Recipe from "../models/Recipe.js";

const router = express.Router();

// GET all recipes
router.get("/", async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.json(recipes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST recipe
router.post("/", async (req, res) => {
  try {
    const newRecipe = new Recipe(req.body);
    const saved = await newRecipe.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// GET single recipe
router.get("/:id", async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    res.json(recipe);
  } catch (err) {
    res.status(404).json({ message: "Not found" });
  }
});

export default router;