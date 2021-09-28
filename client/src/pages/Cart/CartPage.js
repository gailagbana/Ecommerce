import "../index.css";

import { CartInventory } from "../../components";

const CartPage = () => {
  return (
    <div className="cartpage">
      <div className="cartpage__left">
        <h2>Shopping Cart</h2>
        {/* 
        {cartInventory.length === 0 ? (
          <div>
            Cart is empty. <link to="/inventory/">Go Back</link>
          </div>
        ) : (
          cartInventory.map((inventory) => CartInventory)
        )} */}
        <CartInventory />
      </div>
      <div className="cartpage__right">
        <div className="cartpage__info">
          <p>Subtotal (0) items</p>
          <p>$499.99</p>
        </div>
        <div>
          <button>Proceed To Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
