import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm.js";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (inputedExpenseData) => {
    const expenseData = {
      ...inputedExpenseData,
      id: Math.random().toString(),
    };
    props.onNewExpenseHandler(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
