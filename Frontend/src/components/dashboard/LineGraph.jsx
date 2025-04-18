import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import moment from "moment";
const quizHistory = [
  {
    topic: "java",
    score: 3,
    totalQuestions: 5,
    correctAnswers: 3,
    wrongAnswers: 2,
    takenAt: "2025-04-16T21:45:48.457Z",
  },
  {
    topic: "js",
    score: 3,
    totalQuestions: 3,
    correctAnswers: 3,
    wrongAnswers: 0,
    takenAt: "2025-04-16T21:43:58.346Z",
  },
];


const ScoreLineChart = ({ data }) => {
  const chartData = data.map((item) => ({
    date: moment(item.takenAt).format("MMM D"),
    score: item.score,
  }));

  return (
    <div className="bg-black bg-opacity-40 p-4 rounded-xl shadow-lg text-white">
      <h3 className="text-lg mb-4">Score Over Time</h3>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={chartData}>
          <XAxis dataKey="date" stroke="#ccc" />
          <YAxis domain={[0, 10]} stroke="#ccc" />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="score"
            stroke="#00d1ff"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ScoreLineChart;
