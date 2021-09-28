import "../components/index.css";
import inventory_1 from "../assets/inventory_1.jpeg";

const CartInventory = () => {
  return (
    <div className="cartinventory">
      <div className="cartinventory__image">
        <img src={inventory_1} alt="..df" />
      </div>

      <div className="cartinventory__name">Product 1</div>

      <div className="cartinventory__price">45435</div>

      {/* <select
        className="cartinventory__select"
        value={inventory.quantity}
        onChange={() => console.log("change")}
      >
        {[...Array(inventory.quantity).keys()].map((e) => (
          <option key={e + 1} value={e + 1}>
            {e + 1}
          </option>
        ))}
      </select> */}
      <select className="cartinventory__select">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>

      <button className="cartinventory__deletebutton">
        <i class="far fa-trash-alt"></i>
      </button>
    </div>
  );
};

export default CartInventory;
