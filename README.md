# 🧠 AI-Powered Quiz Application

An interactive quiz platform that leverages AI to generate dynamic quizzes on various topics. Built with the MERN stack, this application offers user authentication, quiz history tracking, and performance analytics.

## 🚀 Features

- **AI-Generated Quizzes**: Generate quizzes based on selected topics and question counts.
- **User Authentication**: Secure sign-up and login functionalities using JWT.
- **Quiz History & Analytics**: Track performance with scores, correct/wrong answers, and visual charts.
- **Responsive Design**: Seamless experience across devices with Tailwind CSS.
- **Data Visualization**: Interactive charts using Chart.js and Recharts.



## 📂 Project Structure
```AI-Powered-Quiz/
├── backend/                   # Backend (Express, MongoDB, Google GenAI)
│   ├── controllers/           # Route controllers (auth, quiz, history)
│   ├── middlewares/           # Auth middleware, error handling
│   ├── models/                # Mongoose models (User, QuizHistory)
│   ├── routes/                # Express routes
│   ├── utils/                 # Utility functions (e.g., GenAI quiz generation)
│   ├── config/                # Database config
│   ├── .env                   # Environment variables
│   ├── server.js              # Entry point
│   └── package.json           # Backend dependencies
│
├── frontend/                  # Frontend (React 19, Redux, Tailwind CSS)
│   ├── public/                # Static assets
│   ├── src/
│   │   ├── assets/            # Icons, images
│   │   ├── components/        # Reusable UI components
│   │   ├── features/          # Redux slices (auth, quiz, history)
│   │   ├── pages/             # All route pages (Login, Signup, Dashboard, etc.)
│   │   ├── services/          # Axios API calls
│   │   ├── redux/             # Redux store setup
│   │   ├── App.jsx            # Main App component
│   │   ├── main.jsx           # ReactDOM rendering
│   │   └── index.css          # Tailwind & global styles
│   ├── tailwind.config.js     # Tailwind config
│   └── package.json           # Frontend dependencies
│
├── README.md
└── .gitignore
```
## 🧑‍💻 Tech Stack

### Frontend

- React 19
- Redux Toolkit & Redux Persist
- React Router DOM v7
- Tailwind CSS v4
- Axios
- Chart.js / Recharts
- Lucide / React Icons
- React Hot Toast

### Backend

- Node.js
- Express v5
- MongoDB & Mongoose
- JWT Authentication
- Google GenAI SDK
- dotenv, bcryptjs, cookie-parser, cors



### 1. Clone the Repository

```bash
git clone https://github.com/MukeshSwain/AI-Powered-Quiz.git
cd AI-Powered-Quiz

```
# ⚙️ Installation
## Backend Setup
```bash
cd backend
npm install
```
##Create a .env file in the backend directory:
```bash
PORT=5000
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret
GOOGLE_API_KEY=your_google_genai_api_key
```
##Start the backend server:
```bash
npm run dev
```
##Setup Frontend
```bash
cd ../frontend
npm install
npm run dev
```
#🧪 Upcoming Features

-Timer-based quiz attempts
-Leaderboard for top scorers
-Dark mode toggle
-Email notifucation
-Admin panel for managing users & quiz logs

##Live Demo :https://quizfrontend-swart.vercel.app
##Author : Mukesh Swain

