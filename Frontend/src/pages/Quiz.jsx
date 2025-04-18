import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Loader2, Rocket } from "lucide-react";
import { useDispatch } from "react-redux";
import { setQuizQuestions } from "../redux/slices/questionSlice";

const baseUrl = import.meta.env.VITE_API_BASE_URL;
const Quiz = () => {
  const [topic, setTopic] = useState("");
  const [numQuestions, setNumQuestions] = useState(5);
  const [quizStarted, setQuizStarted] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState("");
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [submitData, setSubmitData] = useState([]);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const input = {
        topic: topic,
        numQuestions: numQuestions,
      };

      const res = await axios.post(`${baseUrl}/quiz/generate`, input, {
        withCredentials: true,
      });
      // dispatch(setQuizQuestions(res.data.quizData));
      setQuestions(res.data.quizData);
      setQuizStarted(true);
    } catch (err) {
      console.error("Error generating quiz:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleOptionClick = (option) => {
    setSelected(option);

    setSubmitData([
      ...submitData,
      {
        question: questions[current].question,
        correctAnswer: questions[current].answer,
        userAnswer: option,
      },
    ]);
  };

  

  const handleNext = async () => {
    if (selected === questions[current].answer) {
      setScore(score + 1);
    }

    setSelected("");

    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      setShowResult(true);
      try {
        setLoading(true);
        const res = await axios.post(
          `${baseUrl}/quiz/submit`,
          {
            answers: submitData,
            topic: topic,
          },
          {
            withCredentials: true,
          }
        );

        if (res.data.success) { 
          toast.success(res.data.message);
          navigate("/dashboard");
          
        }
      } catch (error) {
        toast.error("Something went wrong, please try again");
      } finally {
        setLoading(false);
      }
    }
  };

  const handleRestart = () => {
    setQuizStarted(false);
    setTopic("");
    setNumQuestions(5);
    setCurrent(0);
    setScore(0);
    setSelected("");
    setShowResult(false);
    setQuestions([]);
    setSubmitData([]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-900 via-indigo-900 to-purple-800  flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl p-8 space-y-6">
        {!quizStarted ? (
          <form onSubmit={handleFormSubmit} className="space-y-4">
            <h2 className="text-3xl font-bold text-center text-purple-700">
              Generate Your Quiz
            </h2>

            <div>
              <label className="block font-medium mb-1">Topic</label>
              <input
                type="text"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
                placeholder="e.g. JavaScript, History"
                required
              />
            </div>

            <div>
              <label className="block font-medium mb-1">
                Number of Questions
              </label>
              <input
                type="number"
                min="1"
                max="20"
                value={numQuestions}
                onChange={(e) => setNumQuestions(e.target.value)}
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-purple-700 text-white font-semibold rounded-lg hover:bg-purple-800 transition duration-300"
            >
              {loading ? (
                <span className="flex gap-2 justify-center items-center">
                  <Rocket className="animate-bounce  text-white" />
                  Generating Quiz...
                </span>
              ) : (
                "Generate Quiz"
              )}
            </button>
          </form>
        ) : !showResult ? (
          <>
            <h2 className="text-2xl font-bold text-purple-700">
              Question {current + 1} of {questions.length}
            </h2>
            <p className="text-lg font-medium">{questions[current].question}</p>

            <div className="grid gap-4">
              {Object.entries(questions[current].options).map(
                ([key, option]) => (
                  <button
                    key={key}
                    onClick={() => handleOptionClick(option)}
                    className={`w-full py-3 px-4 rounded-lg border transition duration-300 ${
                      selected === option
                        ? "bg-purple-600 text-white"
                        : "bg-gray-100 hover:bg-purple-100"
                    }`}
                  >
                    {option}
                  </button>
                )
              )}
            </div>

            <button
              onClick={handleNext}
              disabled={!selected}
              className={`w-full mt-4 py-3 rounded-lg text-white font-semibold transition duration-300 ${
                selected ? "bg-purple-700 hover:bg-purple-800" : "bg-gray-400"
              }`}
            >
              {current + 1 === questions.length ? loading?<span className="flex gap-2 justify-center items-center"><Loader2 className="animate-spin"/></span>: "Submit" : "Next"}
            </button>
          </>
        ) : (
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-purple-700">
              Quiz Completed!
            </h2>
            <p className="text-lg">
              Your Score: <span className="font-bold">{score}</span> /{" "}
              {questions.length}
            </p>
            <button
              onClick={handleRestart}
              className="py-3 px-6 bg-purple-700 text-white rounded-lg hover:bg-purple-800"
            >
              Try Again
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
