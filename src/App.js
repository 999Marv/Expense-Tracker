import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExp/NewExpense";
import { useState } from "react";

const DUMMY = [
  {
    id: "e1",
    title: "Toilet Paper",
    type: "Necessity",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "New TV",
    type: "Shopping",
    amount: 799.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e3",
    title: "Car Insurance",
    type: "Bills",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    type: "Shopping",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses item={expenses} />
    </div>
  );
}

export default App;
