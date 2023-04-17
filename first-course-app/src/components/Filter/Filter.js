import "./Filter.css";

import Card from "../UI/Card.js";

const Filter = (props) => {
  const FilterHandler = (event) => {
    props.onFilterHandler(event.target.value);
  };
  return (
    <Card className="year-filter">
      <form>
        <label>Filter by year</label>
        <select value={props.yearDefault} onChange={FilterHandler}>
          <option value="2019">2019</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
        </select>
      </form>
    </Card>
  );
};

export default Filter;
