import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { useSelector } from "react-redux";

const COLORS = ["#a78bfa", "#60a5fa", "#34d399", "#facc15"];

const TopicPieChart = () => {
  const { quizHistory } = useSelector((store) => store.quiz);

  const topicCount = {};
  quizHistory.forEach((q) => {
    topicCount[q.topic] = (topicCount[q.topic] || 0) + 1;
  });

  const data = Object.entries(topicCount).map(([topic, count]) => ({
    name: topic,
    value: count,
  }));

  return (
    <div className="bg-black bg-opacity-30 p-4 rounded-xl shadow-lg">
      <h3 className="text-lg mb-4 text-white">Quiz Attempts by Topic</h3>
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie
            dataKey="value"
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={80}
            label
          >
            {data.map((_, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TopicPieChart;
