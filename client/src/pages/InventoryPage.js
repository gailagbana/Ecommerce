import "./InventoryPage.css";
import Inventory from "../components/Inventory";

const InventoryPage = () => {
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
        <Inventory />
        <Inventory />
        <Inventory />
        <Inventory />
        <Inventory />
      </div>
    </div>
  );
};

export default InventoryPage;
