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
  return (
    <div>
      <Card className="expenses">
        <Filter yearDefault={inputedYear} onFilterHandler={FilterDataHandler} />
        {props.items.map((expense) => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
}
export default ExpensesCombine;
