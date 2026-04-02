# 💰 Finance Dashboard UI

## 📌 Overview

This project is a **Finance Dashboard UI** built as part of a frontend internship assignment.
It allows users to **track, visualize, and analyze financial data** through an intuitive and responsive interface.

The focus of this project is on:

* Clean UI/UX design
* Component-based architecture
* State management
* Data visualization

---

## 🚀 Tech Stack

* **React.js** (Frontend Framework)
* **Tailwind CSS** (Styling)
* **Recharts** (Data Visualization)
* **Context API** (State Management)
* **LocalStorage** (Data Persistence)

---

## 📂 Project Structure

```
src/
 ├── components/
 │    ├── Dashboard/
 │    ├── Transactions/
 │    ├── Insights/
 │    ├── UI/
 │
 ├── context/
 │    └── AppContext.jsx
 │
 ├── data/
 │    └── mockData.js
 │
 ├── pages/
 │    └── Home.jsx
 │
 ├── utils/
 │    └── helpers.js
 │
 └── App.jsx
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository

```
git clone <your-repo-link>
cd finance-dashboard
```

### 2️⃣ Install dependencies

```
npm install
```

### 3️⃣ Run the project

```
npm run dev
```

---

## 🎯 Features

### 📊 Dashboard Overview

* Displays **Total Balance, Income, and Expenses**
* 📈 Line chart for financial trends over time
* 🥧 Pie chart for spending breakdown by category

---

### 💳 Transactions Management

* View transaction list (date, amount, category, type)
* 🔍 Search and filter transactions
* 📂 Category-based filtering
* 🔃 Sorting (latest / amount)
* ➕ Add transactions (Admin only)
* ❌ Delete transactions (Admin only)
* 📁 Export transactions as CSV

---

### 🔐 Role-Based UI (RBAC Simulation)

* **Viewer**

  * Read-only access
* **Admin**

  * Can add and delete transactions

---

### 💡 Insights Section

* Top spending category
* Monthly comparison (current vs previous)
* Total transactions
* Smart insights based on spending trends

---

## ⚡ State Management

* Managed using **React Context API**
* Handles:

  * Transactions data
  * Filters & search
  * User role (Admin / Viewer)
  * UI states

---

## 🎨 UI/UX Features

* Clean and modern dashboard layout
* Responsive design (mobile + desktop)
* Reusable UI components:

  * Button
  * Input
  * Card
  * EmptyState
* Proper spacing, typography, and color usage

---
