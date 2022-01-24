import mongoose from "mongoose";

const mealSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  smallDescription: {
    type: String,
    required: true,
  },
  bigDescription: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  images: {
    types: [String],
    required: true,
  },
  type: {
    type: String,
    enum: ["breakfast", "lunch", "dinner"],
    default: "breakfast",
  },
  reviews: {
    type: Array,
    default: [],
  },
});

const Meal = mongoose.model("meal", mealSchema);

export default Meal;
