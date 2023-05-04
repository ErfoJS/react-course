import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm.js";

const NewExpense = (props) => {
  const [isEditing, SetIsEditing] = useState(false);
  const saveExpenseDataHandler = (inputedExpenseData) => {
    const expenseData = {
      ...inputedExpenseData,
      id: Math.random().toString(),
    };
    props.onNewExpenseHandler(expenseData);
  };
  // Wraper

  const isEditingHendler = () => {
    SetIsEditing(true);
  };

  const cancelButton = () => {
    SetIsEditing(false);
  };
  return (
    <div className="new-expense">
      {!isEditing ? (
        <button onClick={isEditingHendler}>Add New Expense</button>
      ) : (
        <ExpenseForm
          cancelButton={cancelButton}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
