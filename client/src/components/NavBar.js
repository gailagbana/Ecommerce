import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = ({ click }) => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <h2>MYSTICAL HUGGERS</h2>
      </div>

      <ul className="navbar__links">
        <li>
          <div className="userlogo">
            <i class="fas fa-user"></i>
          </div>
        </li>
        <li>
          <Link to="/inventory" className="shop">
            <i class="fas fa-shopping-bag"></i>
          </Link>
        </li>
        <li>
          <div className="searchlogo">
            <i class="fas fa-search"></i>
          </div>
        </li>
        {/* <li>
          <Link to="/cart" className="cart__link">
            <i className="fas fa-shopping-cart"></i>
            <span>
              Cart
              <span className="cartlogo__badge">0</span>
            </span>
          </Link>
        </li> */}
      </ul>

      <div className="harmburger__menu" onClick={click}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default NavBar;
