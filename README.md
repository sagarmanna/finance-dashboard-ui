# 💰 Finance Dashboard UI

🚀 **Live Demo:** https://vercel.com/sagars-projects-0fe093eb/finance-dashboard-ui/GXttBnoX21ZNYR5GtJpaxfBaa56S

## 📌 Overview

This project is a **Finance Dashboard UI** built as part of a frontend internship assignment. It enables users to **track, visualize, and analyze financial data** through a clean and interactive interface.

The goal of this project is to demonstrate:

* Strong **frontend development skills**
* Clean **UI/UX design principles**
* Effective **state management**
* Data-driven **visualization techniques**

---

## 🚀 Tech Stack

* **React.js** – Component-based frontend framework
* **Tailwind CSS** – Utility-first styling
* **Recharts** – Data visualization (charts)
* **Context API** – State management
* **LocalStorage** – Data persistence

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
* 🥧 Pie chart for category-wise spending breakdown

---

### 💳 Transactions Management

* View transactions with **date, amount, category, and type**
* 🔍 Search and filter functionality
* 📂 Category-based filtering
* 🔃 Sorting (latest / amount)
* ➕ Add transactions (**Admin only**)
* ❌ Delete transactions (**Admin only**)
* 📁 Export data as **CSV**

---

### 🔐 Role-Based UI (RBAC Simulation)

* **Viewer**

  * Read-only access
* **Admin**

  * Can add and manage transactions

---

### 💡 Insights Section

* Top spending category
* Monthly comparison (current vs previous)
* Total transaction count
* Dynamic spending insights

---

## ⚡ State Management

Implemented using **React Context API** to manage:

* Transactions data
* Filters & search state
* User role (Admin / Viewer)
* UI behavior

---

## 🎨 UI/UX Highlights

* Clean and modern dashboard layout
* Fully responsive design (mobile + desktop)
* Reusable UI components:

  * Button
  * Input
  * Card
  * EmptyState
* Clear typography and spacing
* Color-coded financial indicators (income/expense)



## 🧠 Approach

The application follows a **component-driven architecture**, focusing on:

* Reusability and modularity
* Separation of concerns
* Scalable and maintainable code

State is centralized using Context API to ensure **efficient data flow** across components.

---



