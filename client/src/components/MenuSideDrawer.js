import "./MenuSideDrawer.css";
import { Link } from "react-router-dom";

const MenuSideDrawer = ({ show, click }) => {
  const menuSideDrawerClass = ["menusidedrawer"];

  if (show) {
    menuSideDrawerClass.push("show");
  }
  return (
    <div className={menuSideDrawerClass.join("  ")}>
      <ul className="menusidedrawer__links" onClick={click}>
        <li>
          <Link to="/user" className="menusidedrawer__user">
            <i class="fas fa-user"></i>
            <span>User</span>
          </Link>
        </li>
        <li>
          <Link to="/inventory" className="menusidedrawer__shop">
            <i class="fas fa-shopping-bag"></i>
            <span>Shop</span>
          </Link>
        </li>
        <li>
          <Link to="/cart" className="menusidedrawer__cart">
            <i className="fas fa-shopping-cart"></i>
            <span>
              Cart
              <span className="menusidedrawer__cartbadge">0</span>
            </span>
          </Link>
        </li>
        <li>
          <Link to="/Search" className="menusidedrawer__search">
            <i class="fas fa-search"></i>
            <span>Search</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MenuSideDrawer;
