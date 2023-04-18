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

  return (
    <div>
      <Card className="expenses">
        <Filter yearDefault={inputedYear} onFilterHandler={FilterDataHandler} />
        {filterdExpenses.length === 0 && <p>No expenses found.</p>}
        {filterdExpenses.length > 0 &&
          filterdExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
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
