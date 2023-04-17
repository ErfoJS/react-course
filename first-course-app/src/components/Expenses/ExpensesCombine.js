import ExpenseItem from "./ExpenseItem";
import "./Styles/ExpensesCombine.css";
import Card from "../UI/Card";
import Filter from "../Filter/Filter.js";
import { useState } from "react";

function ExpensesCombine(props) {
  const [inputedYear, setYear] = useState("2020");
  const FilterDataHandler = (inputedYear) => {
    setYear(inputedYear);
  };
  return (
    <div>
      <Card className="expenses">
        <Filter yearDefault={inputedYear} onFilterHandler={FilterDataHandler} />
        <ExpenseItem
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
        />
        <ExpenseItem
          title={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date}
        />
        <ExpenseItem
          title={props.items[2].title}
          amount={props.items[2].amount}
          date={props.items[2].date}
        />
        <ExpenseItem
          title={props.items[3].title}
          amount={props.items[3].amount}
          date={props.items[3].date}
        />
      </Card>
    </div>
  );
}
export default ExpensesCombine;
