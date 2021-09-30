import { useContext } from "react";
import "../index.css";
import { CartInventory } from "../../components";
import CartContext from "../../store/cartContext";
// import Checkout from "../Checkout/Checkout";

const CartPage = ({ history }) => {
  const cartContext = useContext(CartContext);

  const totalPrice = `$${cartContext.totalPrice.toFixed(2)}`;
  //const hasInventories = cartContext.inventories.length > 0;

  const cartInventoryRemoveHandler = (id) => {
    cartContext.removeInventory(id);
  };

  const cartInventoryAddHandler = (inventory) => {
    cartContext.addInventory(inventory);
  };

  const cartInventories = cartContext.inventories.map((inventory) => (
    <CartInventory
      key={inventory.id}
      name={inventory.name}
      quantity={inventory.quantity}
      price={inventory.price}
      onRemove={cartInventoryRemoveHandler.bind(null, inventory.id)}
      onAdd={cartInventoryAddHandler.bind(null, inventory)}
    />
  ));

  const checkoutHandler = () => {
    return history.push("/checkout/:id", cartContext.inventories);
  };

  return (
    <div className="cartpage">
      <div className="cartpage__left">
        <h2>Shopping Cart</h2>
        {cartInventories}
      </div>
      <div className="cartpage__right">
        <div className="cartpage__info">
          <p>Total Price</p>
          <p>{totalPrice}</p>
        </div>
        <div>
          <button onClick={checkoutHandler}>Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
