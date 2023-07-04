import React, { useEffect, useContext, useState } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../Store/cart-context";

const HeaderCartButton = (props) => {
  const [isButtonHighlited, setIsButtonHighlited] = useState(false);
  const { items } = useContext(CartContext);

  const numberOfCartItems = items.reduce((currNumber, item) => {
    return currNumber + item.amount;
  }, 0);

  const buttonClasses = `${classes.button} ${classes.bump}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setIsButtonHighlited(true);
    const timer = setTimeout(() => {
      setIsButtonHighlited(false);
    }, 110);
    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button
      onClick={props.onShowCart}
      className={`${classes.button} ${isButtonHighlited && buttonClasses}`}
    >
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
