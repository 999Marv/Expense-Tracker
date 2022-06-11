import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
import ExpensesFilter from "./ExpenseFilter";
import { useState } from "react";
import ExpensesChart from "./NewExp/ExpensesChart";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangedHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.item.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangedFilter={filterChangedHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        {props.item.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            type={expense.type}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
}

export default Expenses;
