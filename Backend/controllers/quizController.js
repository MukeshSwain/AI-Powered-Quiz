import Quiz from "../models/Quiz.js";
import generateQuestions from "../services/aiService.js";

export const generateQuizz = async (req, res) => {
  const { topic, numQuestions } = req.body;

  try {
    if (!topic || !numQuestions) {
      return res
        .status(400)
        .json({ message: "Please fill all the fields", success: false });
    }
    const quizData = await generateQuestions(numQuestions, topic);
    if (!quizData) {
      return res
        .status(400)
        .json({ message: "Failed to generate quiz", success: false });
    }
    res.status(200).json({ quizData, success: true });
  } catch (error) {
    console.log("Internal Server Error", error.message);
    res.status(500).json({ error: error.message, success: false });
  }
};

export const submitAnswers = async (req, res) => {
  const { answers, topic } = req.body;
  const userId = req.userId;
  let correct = 0;

  try {
    if (answers.length <= 0 || !topic) {
      return res
        .status(400)
        .json({ message: "Something went wrong", success: false });
    }
    answers.forEach((ans) => {
      if (ans.correctAnswer === ans.userAnswer) {
        correct++;
      }
    });
    const newQuiZ = new Quiz({
      user: userId,
      topic: topic,
      score: correct,
      totalQuestions: answers.length,
      correctAnswers: correct,
      wrongAnswers: answers.length - correct,
      submitData: answers,
    });
    await newQuiZ.save();

    res
      .status(200)
      .json({ message: "Answers submitted successfully", success: true });
  } catch (error) {
    console.log("Internal Server Error", error.message);
    res.status(500).json({ error: error.message, success: false });
  }
};

export const history = async (req, res) => {
  const userId = req.userId;
  try {
    let history = await Quiz.find({ user: userId })
      .sort({ createdAt: -1 });
    
    

    res.status(200).json({ history, success: true });
  } catch (error) {
    console.log("Error fetching history:", error);
    res.status(500).json({
      message: "Internal Server Error",
      success: false,
    });
  }
};
