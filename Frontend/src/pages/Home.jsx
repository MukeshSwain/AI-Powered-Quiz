import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 via-white to-blue-100">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20 flex flex-col md:flex-row items-center justify-between">
        {/* Text Section */}
        <div className="md:w-1/2 text-center md:text-left animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight">
            Test Your Skills with{" "}
            <span className="text-purple-600">AI-Powered Quizzes</span>
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Choose a topic, set the number of questions, and let AI generate
            personalized quizzes for you.
          </p>
          <Link to="/quiz">
            <button className="mt-6 px-6 py-3 bg-purple-600 text-white text-lg rounded-full hover:bg-purple-700 transition duration-300 ease-in-out transform hover:scale-105">
              Get Started
            </button>
          </Link>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 mt-10 md:mt-0 animate-fade-in-up">
          <video
            src="https://cdn-icons-mp4.flaticon.com/512/10971/10971771.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full max-w-sm mx-auto rounded-xl shadow-lg"
          />
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Why Use Our AI Quiz App?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              title="AI Generated Questions"
              description="Dynamically created quizzes based on your chosen topic."
              icon="🤖"
            />
            <FeatureCard
              title="Track Your Progress"
              description="Analyze your quiz history and improve your performance."
              icon="📈"
            />
            <FeatureCard
              title="Beautiful & Responsive"
              description="A smooth experience across all devices, always."
              icon="⚡"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({ title, description, icon }) => (
  <div className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out">
    <div className="text-5xl mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default Home;
