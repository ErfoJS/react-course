import React from "react";
import mealsImage from "../../assets/meals.jpeg";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>Foody</h1>
        <button>Cart</button>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="Atable full of deliciuos food!" />
      </div>
    </React.Fragment>
  );
};

export default Header;
