import React from "react";

const CartContext = React.createContext({
  inventories: [],
  totalPrice: 0,
  addInventory: (inventory) => {},
  removeInventory: (id) => {},
});

export default CartContext;
