import "./SideDrawer.css";
import { Link } from "react-router-dom";

const SideDrawer = ({ show, click }) => {
  const sideDrawerClass = ["sidedrawer"];

  if (show) {
    sideDrawerClass.push("show");
  }
  return (
    <div className={sideDrawerClass.join("  ")}>
      <ul className="sidedrawer__links" onClick={click}>
        <li>
          <Link to="/user" className="sidedrawer__user">
            <i class="fas fa-user"></i>
            <span>User</span>
          </Link>
        </li>
        <li>
          <Link to="/inventory" className="sidedrawer__shop">
            <i class="fas fa-shopping-bag"></i>
            <span>Shop</span>
          </Link>
        </li>
        <li>
          <Link to="/cart" className="sidedrawer__cart">
            <i className="fas fa-shopping-cart"></i>
            <span>
              Cart
              <span className="sidedrawer__cartbadge">0</span>
            </span>
          </Link>
        </li>
        <li>
          <Link to="/Search" className="sidedrawer__search">
            <i class="fas fa-search"></i>
            <span>Search</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideDrawer;
