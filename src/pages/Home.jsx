 import Dashboard from "../components/Dashboard/Dashboard";
import Transactions from "../components/Transactions/Transactions";
import Insights from "../components/Insights/Insights";
import { useApp } from "../context/AppContext";

export default function Home() {
  const { role, setRole } = useApp();

  return (
    <div className="p-6 space-y-6 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Finance Dashboard</h1>

        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="border px-3 py-2 rounded-lg"
        >
          <option value="viewer">Viewer</option>
          <option value="admin">Admin</option>
        </select>
      </div>

      <Dashboard />
      <Transactions />
      <Insights />
    </div>
  );
}