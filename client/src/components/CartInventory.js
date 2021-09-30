import "../components/index.css";

const CartInventory = ({
  price,
  name,
  onAdd,
  onRemove,
  imageUrl,
  quantity,
}) => {
  const pricse = `$${price.toFixed(2)}`;

  return (
    <div className="cartinventory">
      <div className="cartinventory__image">
        <img src={imageUrl} alt="stuff" />
      </div>

      <div className="cartinventory__name">{name}</div>

      <div className="cartinventory__price">{pricse}</div>

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
      {/* <select className="cartinventory__select">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select> */}

      <div className="cartInventory__button">
        <button onClick={onRemove}>−</button>
        <div>{quantity}</div>
        <button onClick={onAdd}>+</button>
      </div>
      <button className="cartinventory__deletebutton">
        <i class="far fa-trash-alt"></i>
      </button>
    </div>
  );
};

export default CartInventory;
