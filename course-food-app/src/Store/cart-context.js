import react from "react";

const CartContext = react.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
  addItemInModal: (item) => {},
});

export default CartContext;
