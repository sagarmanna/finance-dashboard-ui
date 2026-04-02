import { useApp } from "../../context/AppContext";
import { getTopCategory } from "../../utils/helpers";

export default function Insights() {
  const { transactions } = useApp();

  const topCategory = getTopCategory(transactions);

  // 📊 Total transactions
  const totalTransactions = transactions.length;

  // 📅 Monthly comparison (simple logic)
  const currentMonth = new Date().getMonth();

  const currentMonthSpending = transactions
    .filter(
      (t) =>
        t.type === "expense" &&
        new Date(t.date).getMonth() === currentMonth
    )
    .reduce((sum, t) => sum + t.amount, 0);

  const lastMonthSpending = transactions
    .filter(
      (t) =>
        t.type === "expense" &&
        new Date(t.date).getMonth() === currentMonth - 1
    )
    .reduce((sum, t) => sum + t.amount, 0);

  // 📈 Insight message
  let message = "Your spending is stable.";

  if (currentMonthSpending > lastMonthSpending) {
    message = "Your spending increased compared to last month.";
  } else if (currentMonthSpending < lastMonthSpending) {
    message = "Good job! You reduced spending this month.";
  }

  return (
    <div className="bg-white p-5 rounded-xl shadow space-y-3">
      <h2 className="text-lg font-semibold">Insights</h2>

      <p>
        🔝 <span className="font-medium">Top category:</span>{" "}
        {topCategory}
      </p>

      <p>
        📊 <span className="font-medium">Total transactions:</span>{" "}
        {totalTransactions}
      </p>

      <p>
        💸 <span className="font-medium">This month:</span> ₹
        {currentMonthSpending}
      </p>

      <p>
        📅 <span className="font-medium">Last month:</span> ₹
        {lastMonthSpending}
      </p>

      <p className="text-sm text-blue-600 font-medium">
        💡 {message}
      </p>
    </div>
  );
}