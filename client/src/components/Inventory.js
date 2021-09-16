import { Link } from "react-router-dom";
import "./Inventory.css";
import inventory_image1 from "../Assets/inventory_1.jpeg";

const Inventory = () => {
  return (
    <Link to="/inventory/id" className="inventory">
      <div className="inventory__info">
        <img src={inventory_image1} alt="" />

        <p className="info__name"> Prodduct 1 a baga anad </p>
        <p className="info__price">$200.99</p>
        <p className="info__extradetail"> Pre Order</p>
      </div>
    </Link>
  );
};

export default Inventory;
