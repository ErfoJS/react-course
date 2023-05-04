import ExpenseItem from "./ExpenseItem";
import "./Styles/ExpensesCombine.css";
import Card from "../UI/Card";
import Filter from "./ExpensesFilter.js";
import { useState } from "react";
import ExpensesList from "./ExpensesList.js";

function ExpensesCombine(props) {
  const [inputedYear, setYear] = useState("2020");

  const FilterDataHandler = (inputedYear) => {
    setYear(inputedYear);
    //console.log(inputedYear);
  };

  const filterdExpenses = props.items.filter(
    (expense) => expense.date.getFullYear() === +inputedYear
  );

  return (
    <li>
      <div>
        <Card className="expenses">
          <Filter
            yearDefault={inputedYear}
            onFilterHandler={FilterDataHandler}
          />
          <ExpensesList items={filterdExpenses} />
        </Card>
      </div>
    </li>
  );
}
export default ExpensesCombine;
