import ExpenseItem from "./ExpenseItem";
import "./Styles/ExpensesCombine.css";
import Card from "../UI/Card";
import Filter from "./ExpensesFilter.js";
import { useState } from "react";
import ExpensesList from "./ExpensesList.js";
import ExpensesChart from "./ExpensesChart.js";

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
    <div>
      <Card className="expenses">
        <Filter yearDefault={inputedYear} onFilterHandler={FilterDataHandler} />
        <ExpensesChart expenses={filterdExpenses} />
        <ExpensesList items={filterdExpenses} />
      </Card>
    </div>
  );
}
export default ExpensesCombine;
