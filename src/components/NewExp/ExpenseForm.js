import { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [origTitle, setTitle] = useState("");
  const [origAmount, setAmount] = useState("");
  const [origDate, setDate] = useState("");
  const [origType, setType] = useState("");

  const titleChanged = (event) => {
    setTitle(event.target.value);
  };

  const amountChanged = (event) => {
    setAmount(event.target.value);
  };

  const dateChanged = (event) => {
    setDate(event.target.value);
  };

  const typeChanged = (event) => {
    setType(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: origTitle,
      amount: +origAmount,
      date: new Date(origDate),
      type: origType,
    };

    props.onSaveExpenseData(expenseData);
    setTitle("");
    setAmount("");
    setDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={origTitle} onChange={titleChanged} />
        </div>
        <div className="new-expense__control">
          <label>Type of Expense</label>
          <select name="Type" required onChange={typeChanged}>
            <option value="Necessity">Necessity</option>
            <option value="Bills">Bills</option>
            <option value="Shopping">Shopping</option>
          </select>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={origAmount}
            onChange={amountChanged}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2022-01-01"
            max="2025-12-31"
            value={origDate}
            onChange={dateChanged}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
