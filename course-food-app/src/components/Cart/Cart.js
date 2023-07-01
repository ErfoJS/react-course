import { useContext } from "react";
import Modal from "../Modal/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import CartContext from "../../Store/cart-context";

const Cart = (props) => {
  const orderedMealsCtx = useContext(CartContext);
  const totalAmount = `$${orderedMealsCtx.totalAmount.toFixed(2)}`;
  const isItemInCard = orderedMealsCtx.items.length > 0;

  const cartItemRemoveHandler = () => {};
  const cartItemAddHandler = () => {};

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {orderedMealsCtx.items.map((item) => (
        <CartItem
          price={item.price}
          amount={item.amount}
          name={item.name}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
          key={item.id}
        />
      ))}
    </ul>
  );

  return (
    <Modal onHideCart={props.onHideCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onHideCart} className={classes["button--alt"]}>
          Close
        </button>
        {isItemInCard && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
