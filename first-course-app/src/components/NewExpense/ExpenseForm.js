import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [inputedTitle, setTitle] = useState("");
  const [inputedAmount, setAmount] = useState("");
  const [inputedDate, setDate] = useState("");
  // const [userInput, setUserInput] = useState({
  //   inputedTitle: "",
  //   inputedAmount: "",
  //   inputedDate: "",
  // });
  const titleHandler = (event) => {
    setTitle(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   inputedTitle: event.target.value,
    // });
    //   setUserInput((prevState) => {
    //     return { ...prevState, inputedTitle: event.target.value };
    //   });
  };

  const amountHandler = (event) => {
    setAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   inputedAmount: event.target.value,
    // });
    //   setUserInput((prevState) => {
    //     return { ...prevState, inputedAmount: event.target.value };
    //   });
  };

  const dateHandler = (event) => {
    setDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   inputedDate: event.target.value,
    // });
    //   setUserInput((prevState) => {
    //     return { ...prevState, inputedDate: event.target.value };
    //   });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: inputedTitle,
      amount: inputedAmount,
      date: new Date(inputedDate),
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
          <input value={inputedTitle} type="text" onChange={titleHandler} />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            value={inputedAmount}
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountHandler}
          />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            value={inputedDate}
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
