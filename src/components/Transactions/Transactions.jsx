import { useState } from "react";
import { useApp } from "../../context/AppContext";
import Input from "../UI/Input";
import Button from "../UI/Button";
import EmptyState from "../UI/EmptyState";

export default function Transactions() {
  const {
    transactions,
    deleteTransaction,
    role,
    filter,
    setFilter,
    search,
    setSearch,
    addTransaction,
  } = useApp();

  const [categoryFilter, setCategoryFilter] = useState("");
  const [sort, setSort] = useState("latest");

  const [form, setForm] = useState({
    date: "",
    amount: "",
    category: "",
    type: "expense",
  });

  // 🔍 Filtering + Sorting
  const filtered = transactions
    .filter((t) => filter === "all" || t.type === filter)
    .filter((t) =>
      t.category.toLowerCase().includes(search.toLowerCase())
    )
    .filter((t) =>
      categoryFilter ? t.category === categoryFilter : true
    )
    .sort((a, b) =>
      sort === "latest"
        ? new Date(b.date) - new Date(a.date)
        : a.amount - b.amount
    );

  // ➕ Add Transaction with validation
  const handleAdd = () => {
    if (!form.date || !form.amount || !form.category) {
      alert("Please fill all fields");
      return;
    }

    addTransaction(form);

    setForm({
      date: "",
      amount: "",
      category: "",
      type: "expense",
    });
  };

  // 📁 Export CSV
  const exportCSV = () => {
    const header = "Date,Amount,Category,Type\n";
    const rows = transactions
      .map((t) => `${t.date},${t.amount},${t.category},${t.type}`)
      .join("\n");

    const blob = new Blob([header + rows], { type: "text/csv" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "transactions.csv";
    a.click();
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow space-y-4">
      <h2 className="text-xl font-semibold">Transactions</h2>

      {/* 🔍 Filters */}
      <div className="flex flex-wrap gap-2">
        <Input
          placeholder="Search category"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border p-2 rounded-lg"
        >
          <option value="all">All</option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>

        <select
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="border p-2 rounded-lg"
        >
          <option value="">All Categories</option>
          <option value="Food">Food</option>
          <option value="Shopping">Shopping</option>
          <option value="Salary">Salary</option>
        </select>

        <select
          onChange={(e) => setSort(e.target.value)}
          className="border p-2 rounded-lg"
        >
          <option value="latest">Latest</option>
          <option value="amount">Amount</option>
        </select>

        <Button onClick={exportCSV}>Export CSV</Button>
      </div>

      {/* ➕ Admin Form */}
      {role === "admin" && (
        <div className="flex flex-wrap gap-2">
          <Input
            type="date"
            value={form.date}
            onChange={(e) =>
              setForm({ ...form, date: e.target.value })
            }
          />

          <Input
            placeholder="Amount"
            type="number"
            value={form.amount}
            onChange={(e) =>
              setForm({ ...form, amount: +e.target.value })
            }
          />

          <Input
            placeholder="Category"
            value={form.category}
            onChange={(e) =>
              setForm({ ...form, category: e.target.value })
            }
          />

          <select
            value={form.type}
            onChange={(e) =>
              setForm({ ...form, type: e.target.value })
            }
            className="border p-2 rounded-lg"
          >
            <option value="expense">Expense</option>
            <option value="income">Income</option>
          </select>

          <Button onClick={handleAdd}>Add</Button>
        </div>
      )}

      {/* 📊 Table */}
      {filtered.length === 0 ? (
        <EmptyState />
      ) : (
        <table className="w-full text-left">
          <thead>
            <tr className="border-b">
              <th>Date</th>
              <th>Amount</th>
              <th>Category</th>
              <th>Type</th>
              {role === "admin" && <th>Action</th>}
            </tr>
          </thead>

          <tbody>
            {filtered.map((t) => (
              <tr key={t.id} className="border-b">
                <td>{t.date}</td>

                <td
                  className={
                    t.type === "income"
                      ? "text-green-600"
                      : "text-red-600"
                  }
                >
                  ₹{t.amount}
                </td>

                <td>{t.category}</td>
                <td>{t.type}</td>

                {role === "admin" && (
                  <td>
                    <button
                      onClick={() => deleteTransaction(t.id)}
                      className="text-red-500"
                    >
                      Delete
                    </button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}