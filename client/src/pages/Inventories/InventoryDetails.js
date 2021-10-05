import "../index.css";
import { useState, useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getInventoryDetails } from "../../redux/actions/inventoryActions";
//import { addToCart } from "../../redux/actions/cartActions";
import CartContext from "../../store/cartContext";

const InventoryDetails = ({ match, history }) => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const { loading } = useSelector((state) => state.getInventoryDetails);

  const { payload, error } = useSelector((state) => {
    return state.getInventoryDetails.inventory;
  });

  useEffect(() => {
    if (payload && match.params.id !== payload.id) {
      dispatch(getInventoryDetails(match.params.id));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  // const addToCartHandler = () => {
  //   const id = 6;
  //   payload.quantity = quantity;
  //   dispatch(addToCart(id, payload));
  //   //history.push(`/cart/${id}`);
  // };

  const cartContext = useContext(CartContext);

  //const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = (quantity) => {
    cartContext.addInventory({
      name: payload.name,
      quantity: quantity,
      price: payload.price,
      imageUrl: payload.imageUrl,
      inventoryId: payload.id,
    });
  };

  return (
    <div className="inventorydetail">
      {loading ? (
        <h2>Loading...</h2>
      ) : error != null ? (
        <h2>{error}</h2>
      ) : (
        <>
          <div className="inventorydetail__left">
            <div className="left__image">
              <img src={payload.imageUrl} alt="njk" />
            </div>

            <div className="left__info">
              <p className="left__name">{payload.name}</p>
              <p>Price : ${payload.price} </p>
              <p>Description: {payload.description}</p>
            </div>
          </div>

          <div className="inventorydetail__right">
            <div className="right__info">
              <p>
                Price: <span>${payload.price}</span>
              </p>
              <p>
                Status:{" "}
                <span>
                  {payload.quantity > 0 ? "In Stock" : "Out of Stock"}
                </span>
              </p>
              <p>
                Quantity
                <select
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                >
                  {[...Array(payload.quantity).keys()].map((x) => (
                    <option key={x + 1} value={x + 1}>
                      {x + 1}
                    </option>
                  ))}
                </select>
              </p>
              <p>
                <button type="button" onClick={addToCartHandler}>
                  Add To Cart
                </button>
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default InventoryDetails;
