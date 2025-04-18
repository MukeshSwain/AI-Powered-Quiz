
import React, { use, useEffect, useState } from "react";


import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const History = () => {
  const { quizHistory } = useSelector((store) => store.quiz);
const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-900 via-indigo-900 to-purple-800 text-white px-4 py-25">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-10 text-pink-300 drop-shadow-lg">
          🎯 Your Quiz History
        </h2>

        {history.length === 0 ? (
          <p className="text-center text-lg">Loading your quiz history...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {quizHistory?.map((quiz, index) => (
              <div onClick={()=>navigate(`/details/${quiz._id}`)}
                key={index}
                className="relative group bg-white/10 backdrop-blur-lg border border-purple-700 rounded-2xl p-6 shadow-2xl transition-transform hover:-translate-y-1 hover:shadow-3xl"
              >
                <div className="absolute top-2 right-3 text-sm text-purple-300">
                  {new Date(quiz.takenAt).toLocaleDateString()}
                </div>

                <h3 className="text-xl font-semibold text-pink-200 mb-3">
                  🧠 {quiz.topic}
                </h3>
                <p className="text-white text-lg font-medium">
                  Score:{" "}
                  <span className="text-green-400">
                    {quiz.correctAnswers} / {quiz.totalQuestions}
                  </span>
                </p>

                <div className="mt-4">
                  <div className="h-2 w-full bg-purple-300 rounded-full">
                    <div
                      className="h-2 bg-green-400 rounded-full transition-all duration-500"
                      style={{
                        width: `${
                          (quiz.correctAnswers / quiz.totalQuestions) * 100
                        }%`,
                      }}
                    />
                  </div>
                </div>

                <p className="mt-4 text-sm text-gray-300">
                  {new Date(quiz.takenAt).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}{" "}
                  PM
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default History;
