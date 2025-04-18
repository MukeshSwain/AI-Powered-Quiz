import Sidebar from "../components/dashboard/Sidebar";
import ScoreLineChart from "../components/dashboard/LineGraph";
import AccuracyBarChart from "../components/dashboard/BarGraph";
import TopicPieChart from "../components/dashboard/PieChart";
import { useSelector } from "react-redux";
import { setQuizHistory } from "../redux/slices/quizSlice";
import { useEffect } from "react";

import axios from "axios";
import { useDispatch } from "react-redux";
const baseUrl = import.meta.env.VITE_API_BASE_URL;
const Dashboard = () => {
  const { quizHistory } = useSelector((store) => store.quiz);
  const dispatch = useDispatch();
  
  useEffect(() => {
    async function fetchHistory() {
      try {
        const res = await axios.get(`${baseUrl}/quiz/history`, {
          withCredentials: true,
        });
        if (res.data.success) {
          setTimeout(() => {
            dispatch(setQuizHistory(res.data.history));
          }, 1000);
        }
      } catch (error) {
        console.log("Error fetching history:", error);
      }
    }

    fetchHistory();
  }, []);
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-purple-950 via-indigo-900 to-black text-white">
      <Sidebar />

      <div className="flex-1 p-6 space-y-6">
        <h1 className="text-3xl font-bold">Dashboard</h1>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ScoreLineChart data={quizHistory} />
          <TopicPieChart />
          <AccuracyBarChart data={quizHistory} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
