import express from "express";
import { getAllMeals, createMeal } from "../controllers/meals.js";

const router = express.Router();

// get all the meals
router.get("/", getAllMeals);

// create meals
router.post("/", createMeal);

export default router;
