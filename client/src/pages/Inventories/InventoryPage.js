import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import "../index.css";
import { getInventories as allInventories } from "../../redux/actions/inventoryActions";
import { Inventory } from "../../components";

const InventoryPage = () => {
  const dispatch = useDispatch();

  const { loading } = useSelector((state) => state.getInventories);
  const { payload, error } = useSelector(
    (state) => state.getInventories.inventories
  );

  useEffect(() => {
    dispatch(allInventories());
  }, [dispatch]);

  return (
    <div className="inventorypage">
      <div className="inventorypage__heading">
        <div className="inventorypage__filter">
          <div>
            FILTER
            <i class="fas fa-chevron-down"></i>
          </div>

          <div>
            SORT BY
            <i class="fas fa-chevron-down"></i>
          </div>

          <div></div>
        </div>
      </div>
      <div className="display__inventories">
        {loading ? (
          <h2>Loading...</h2>
        ) : error != null ? (
          <h2>{error}</h2>
        ) : (
          payload.map((inventory) => {
            return (
              <Inventory
                key={inventory.id}
                name={inventory.name}
                description={inventory.description}
                price={inventory.price}
                quantity={inventory.quantity}
                imageUrl={inventory.imageUrl}
                inventoryId={inventory.id}
                // sellerId={inventory.sellerId}
                // categoryId={inventory.categoryId}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default InventoryPage;
