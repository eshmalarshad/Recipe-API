import mongoose from "mongoose";

const recipeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },

    cuisine: {
      type: String,
      required: true,
      trim: true
    },

    difficulty: {
      type: String,
      enum: ["Easy", "Medium", "Hard"],
      default: "Easy"
    },

    prepTime: {
      type: Number, // in minutes
      required: true
    },

    cookTime: {
      type: Number, // in minutes
      required: true
    },

    servings: {
      type: Number,
      required: true
    },

    ingredients: {
      type: [String],
      required: true
    },

    steps: {
      type: [String],
      required: true
    },

    tags: {
      type: [String],
      default: []
    }
  },
  {
    timestamps: true
  }
);

const Recipe = mongoose.model("Recipe", recipeSchema);

export default Recipe;