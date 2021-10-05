import { Link } from "react-router-dom";
import "./index.css";
//import inventory_image1 from "../../assets/inventory_1.jpeg";

const Inventory = ({
  inventoryId,
  imageUrl,
  name,
  price,
  description,
  quantity,
}) => {
  return (
    <Link to={`/inventory/${inventoryId}`} className="inventory">
      <div className="inventory__info">
        <img src={imageUrl} alt={description} />

        <p className="info__name"> {name}</p>
        <p className="info__price">${price}</p>
        <p className="info__extradetail"> {quantity} available</p>
      </div>
    </Link>
  );
};

export default Inventory;
