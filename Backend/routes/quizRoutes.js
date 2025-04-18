import express from "express";
import { generateQuizz,history,submitAnswers } from "../controllers/quizController.js";
import { isAuthenticated } from "../middleware/isAuthenticated.js";

const router = express.Router();


router.post("/generate",isAuthenticated, generateQuizz);
router.post("/submit", isAuthenticated, submitAnswers);
router.get("/history", isAuthenticated, history);

export default router;