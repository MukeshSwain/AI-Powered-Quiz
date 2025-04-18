import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const QuizDetails = () => {
  const { quizHistory } = useSelector((store) => store.quiz);
  const { id } = useParams();

  const selectedQuiz = quizHistory.find((quiz) => quiz._id === id);

  if (!selectedQuiz) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-800 text-white">
        <h2 className="text-3xl font-bold animate-pulse">Quiz not found.</h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-4 md:px-12 py-25 bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-800 text-white">
      <h1 className="text-4xl font-extrabold mb-12 text-center drop-shadow-lg tracking-wide">
        {selectedQuiz.topic} - Quiz Summary
      </h1>

      <div className="space-y-8">
        {selectedQuiz.submitData.map((item, index) => {
          const isCorrect = item.correctAnswer === item.userAnswer;
          return (
            <div
              key={index}
              className={`rounded-2xl p-3 md:p-6 border shadow-2xl transition-all  duration-300 transform hover:scale-[1.01] ${
                isCorrect
                  ? "bg-green-100/90 text-green-800 border-green-300"
                  : "bg-red-100/90 text-red-800 border-red-300"
              }`}
            >
              <h2 className="text-xl md:text-2xl font-semibold mb-4">
                <span className="mr-2 text-gray-700">Q{index + 1}.</span>
                {item.question}
              </h2>
              <p className="text-lg mb-1">
                <span className="font-semibold">Your Answer:</span>{" "}
                <span
                  className={`${
                    isCorrect ? "text-green-700" : "text-red-700"
                  } font-medium`}
                >
                  {item.userAnswer}
                </span>
              </p>
              <p className="text-lg">
                <span className="font-semibold">Correct Answer:</span>{" "}
                <span className="text-black">{item.correctAnswer}</span>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default QuizDetails;
