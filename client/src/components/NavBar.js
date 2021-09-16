import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = ({ click, cart }) => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <Link to="/">MYSTICAL HUGGERS</Link>
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
        <li>
          <div className="cart__link" onClick={cart}>
            <i className="fas fa-shopping-cart"></i>
            <span>
              <span className="cartlogo__badge">0</span>
            </span>
          </div>
        </li>
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
