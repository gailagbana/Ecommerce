import "../index.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getInventoryDetails } from "../../redux/actions/inventoryActions";
import { addToCart } from "../../redux/actions/cartActions";

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

  const addToCartHandler = () => {
    dispatch(addToCart(payload.id, quantity));
    //history.push(`/cart/${}`);
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
