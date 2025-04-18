import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-900 via-indigo-900 to-purple-800 text-white px-6 pt-16 pb-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <h1 className="text-4xl font-extrabold mb-4">
            <span className="text-white">Quiz</span>
            <span className="text-purple-400">Genie</span>
          </h1>
          <p className="text-sm text-gray-300 leading-relaxed">
            Unlock your mind with AI-powered quizzes that inspire, challenge,
            and help you grow.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h2 className="text-lg font-semibold text-purple-300 mb-4">
            Quick Links
          </h2>
          <ul className="space-y-2 text-sm">
            {["Home", "Quiz", "History"].map((item, idx) => (
              <li key={idx}>
                <Link
                  to={`/${item.toLowerCase()}`}
                  className="hover:text-purple-400 transition-all duration-300 hover:pl-2 inline-block"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-lg font-semibold text-purple-300 mb-4">
            Connect with Us
          </h2>
          <div className="flex space-x-6 text-2xl">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-200 hover:text-purple-400 transition-transform duration-300 hover:scale-110"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-200 hover:text-purple-400 transition-transform duration-300 hover:scale-110"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-200 hover:text-purple-400 transition-transform duration-300 hover:scale-110"
            >
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-lg font-semibold text-purple-300 mb-4">
            Contact
          </h2>
          <p className="text-sm text-gray-300 leading-relaxed">
            Have questions or suggestions? Email us at{" "}
            <a
              href="mailto:support@quizgenie.com"
              className="text-purple-400 hover:underline"
            >
              support@quizgenie.com
            </a>
          </p>
        </div>
      </div>

      {/* Bottom section */}
      <div className="mt-12 border-t border-purple-700 pt-6 text-center text-sm text-purple-300">
        <p>© {new Date().getFullYear()} QuizGenie. All rights reserved.</p>
        <p className="mt-2 text-xs text-gray-400">
          Built with 💙 & AI for curious minds.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
