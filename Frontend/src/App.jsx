
import { Route, Routes } from 'react-router-dom';
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login';
import Signup from './pages/Signup';
import Quiz from './pages/Quiz';
import History from './pages/History';
import Dashboard from './pages/Dashboard';
import { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';
import QuizDetails from './pages/Quizdetail';


function App() {
  const { user } = useSelector((state) => state.auth);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={!user?<Login />:<Home />} />
        <Route path="/signup" element={!user?<Signup />:<Home />} />
        <Route path="/quiz" element={user?<Quiz />:<Login />} />
        <Route path="/history" element={user?<History />:<Login />} />
        <Route path="/dashboard" element={user ? <Dashboard /> : <Login />} />
        <Route path="/details/:id" element={user?<QuizDetails />:<Login />} />
        
      </Routes>
      <Toaster position="bottom-right" reverseOrder={false} />
      <Footer />
    </>
  );
}

export default App
