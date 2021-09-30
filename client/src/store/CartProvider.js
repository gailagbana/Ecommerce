import { useReducer } from "react";

import CartContext from "./cartContext";

const defaultCartState = {
  inventories: [],
  totalPrice: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedTotalPrice =
      state.totalPrice + action.inventory.price * action.inventory.quantity;

    const existingCartInventoryIndex = state.inventories.findIndex(
      (inventory) => inventory.id === action.inventory.id
    );
    const existingCartInventory = state.inventories[existingCartInventoryIndex];
    let updatedInventories;

    if (existingCartInventory) {
      const updatedInventory = {
        ...existingCartInventory,
        quantity: existingCartInventory.quantity + action.inventory.quantity,
      };

      updatedInventories = [...state.inventories];
      updatedInventories[existingCartInventoryIndex] = updatedInventory;
    } else {
      updatedInventories = state.inventories.concat(action.inventory);
    }

    return {
      inventories: updatedInventories,
      totalPrice: updatedTotalPrice,
    };
  }

  if (action.type === "REMOVE") {
    const existingCartInventoryIndex = state.inventories.findIndex(
      (inventory) => inventory.id === action.id
    );

    const existingInventory = state.inventories[existingCartInventoryIndex];
    const updatedTotalPrice = state.totalPrice - existingInventory.price;

    let updatedInventories;
    if (existingInventory.price === 1) {
      updatedInventories = state.inventories.filter(
        (inventory) => inventory.id !== action.id
      );
    } else {
      const updatedInventory = {
        ...existingInventory,
        price: existingInventory.price - 1,
      };
      updatedInventories = [...state.inventories];
      updatedInventories[existingCartInventoryIndex] = updatedInventory;
    }

    return {
      inventories: updatedInventories,
      totalPrice: updatedTotalPrice,
    };
  }

  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addInventoryToCartHandler = (inventory) => {
    dispatchCartAction({ type: "ADD", inventory: inventory });
  };

  const removeInventoryFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const cartContext = {
    inventories: cartState.inventories,
    totalPrice: cartState.totalPrice,
    addInventory: addInventoryToCartHandler,
    removeInventory: removeInventoryFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
