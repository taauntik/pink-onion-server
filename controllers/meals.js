import Meal from "../models/meal.js";
export const getAllMeals = (req, res) => {};

export const createMeal = (req, res) => {
  const meal = req.body;

  const newMeal = new Meal(meal);

  try {
    await newMeal.save();
    res.status(201).json(newMeal);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
