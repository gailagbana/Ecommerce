import { Link } from "react-router-dom";
import inventory_1 from "../assets/inventory_1.jpeg";

import "./index.css";

const CartSideDrawer = ({ show, cart }) => {
  const cartSideDrawerClass = ["cartsidedrawer"];

  if (show) {
    cartSideDrawerClass.push("show");
  }
  return (
    <div className={cartSideDrawerClass.join("  ")} onClick={cart}>
      <div className="cartinventory__image">
        <img src={inventory_1} alt="A black Shirt" />
      </div>

      <Link to={`/cart/:id`} className="cartinventory__name">
        Product 1
      </Link>

      <div className="cartinventory__price"> $200.8</div>

      <select className="cartinventory__select">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>

      <button className="cartinventory__deletebutton">
        <i class="far fa-trash-alt"></i>
      </button>
    </div>
  );
};

export default CartSideDrawer;
