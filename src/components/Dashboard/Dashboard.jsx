import { useApp } from "../../context/AppContext";
import { calculateSummary } from "../../utils/helpers";
import Card from "../UI/Card";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

export default function Dashboard() {
  const { transactions } = useApp();
  const { income, expense, balance } = calculateSummary(transactions);

  // 📈 Line chart data (balance over time)
  const lineData = transactions.map((t) => ({
    date: t.date,
    amount: t.amount,
  }));

  // 🥧 Pie chart data (category-wise expense)
  const categoryMap = {};
  transactions.forEach((t) => {
    if (t.type === "expense") {
      categoryMap[t.category] =
        (categoryMap[t.category] || 0) + t.amount;
    }
  });

  const pieData = Object.keys(categoryMap).map((key) => ({
    name: key,
    value: categoryMap[key],
  }));

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  return (
    <div className="space-y-6">
      
      {/* ✅ Summary Cards */}
      <div className="grid md:grid-cols-3 gap-4">
        <Card title="Balance" value={balance} />
        <Card title="Income" value={income} />
        <Card title="Expense" value={expense} />
      </div>

      {/* 📊 Charts Section */}
      <div className="grid md:grid-cols-2 gap-6">
        
        {/* 📈 Line Chart */}
        <div className="bg-white p-4 rounded-xl shadow">
          <h3 className="mb-2 font-semibold">Balance Trend</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={lineData}>
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="amount" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* 🥧 Pie Chart */}
        <div className="bg-white p-4 rounded-xl shadow">
          <h3 className="mb-2 font-semibold">Spending Breakdown</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                nameKey="name"
                outerRadius={80}
              >
                {pieData.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}