import ExpenseItem from "./ExpenseItem";
import "./Styles/ExpensesCombine.css";
import Card from "../UI/Card";
import Filter from "./ExpensesFilter.js";
import { useState } from "react";

function ExpensesCombine(props) {
  const [inputedYear, setYear] = useState("2020");

  const FilterDataHandler = (inputedYear) => {
    setYear(inputedYear);
    console.log(inputedYear);
  };

  const filterdExpenses = props.items.filter(
    (expense) => expense.date.getFullYear() === +inputedYear
  );

  let filterLogic = <p>No expenses found.</p>;
  if (filterdExpenses.length > 0) {
    filterLogic = filterdExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  return (
    <div>
      <Card className="expenses">
        <Filter yearDefault={inputedYear} onFilterHandler={FilterDataHandler} />
        {filterLogic}
      </Card>
    </div>
  );
}
export default ExpensesCombine;
