export default function EmptyState({
  title = "No data found",
  description = "There are no transactions to display.",
  action,
}) {
  return (
    <div className="flex flex-col items-center justify-center py-10 text-center">
      
      {/* Icon */}
      <div className="text-4xl mb-3">📭</div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-gray-700">
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm text-gray-500 mt-1 max-w-xs">
        {description}
      </p>

      {/* Optional Action */}
      {action && <div className="mt-4">{action}</div>}
    </div>
  );
}