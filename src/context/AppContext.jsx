import { createContext, useContext, useState, useEffect } from "react";
import mockData from "../data/mockData";

const AppContext = createContext();
export const useApp = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const [transactions, setTransactions] = useState(() => {
    const saved = localStorage.getItem("transactions");
    return saved ? JSON.parse(saved) : mockData;
  });

  const [role, setRole] = useState("viewer");
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  const addTransaction = (tx) => {
    if (!tx.amount || !tx.category) return;
    setTransactions([...transactions, { ...tx, id: Date.now() }]);
  };

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter((t) => t.id !== id));
  };

  return (
    <AppContext.Provider
      value={{
        transactions,
        addTransaction,
        deleteTransaction,
        role,
        setRole,
        filter,
        setFilter,
        search,
        setSearch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};