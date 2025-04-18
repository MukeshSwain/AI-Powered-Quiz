import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const AccuracyBarChart = ({ data }) => {
  const chartData = data.map((item) => ({
    topic: item.topic,
    correct: item.correctAnswers,
    wrong: item.wrongAnswers,
  }));

  return (
    <div className="bg-black bg-opacity-40 p-4 rounded-xl shadow-lg text-white">
      <h3 className="text-lg mb-4">Correct vs Wrong Answers</h3>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={chartData}>
          <XAxis dataKey="topic" stroke="#ccc" />
          <YAxis stroke="#ccc" />
          <Tooltip />
          <Legend />
          <Bar dataKey="correct" fill="#00ffb3" />
          <Bar dataKey="wrong" fill="#ff6b6b" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AccuracyBarChart;
