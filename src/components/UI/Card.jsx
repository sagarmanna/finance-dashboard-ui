export default function Card({
  title,
  value = 0,
  type = "default",
}) {
  const styles = {
    income: "text-green-600",
    expense: "text-red-600",
    balance: "text-blue-600",
    default: "text-gray-900",
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow-md border border-gray-200">
      
      {/* Title */}
      <p className="text-sm font-medium text-gray-500 mb-2">
        {title}
      </p>

      {/* Value */}
      <h2 className={`text-3xl font-bold ${styles[type]}`}>
        ₹ {Number(value).toLocaleString()}
      </h2>

    </div>
  );
}