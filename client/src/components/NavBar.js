import { Link } from "react-router-dom";
import React, { useState, useContext } from "react";
import "./index.css";
import { Dropdown } from "react-bootstrap";
import AuthContext from "../store/authContext";

const NavBar = ({ click, cart }) => {
  const [search, setSearch] = useState(true);
  const authContext = useContext(AuthContext);

  const isLoggedIn = authContext.isLoggedIn;

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <Link to="/">MYSTICAL HUGGERS</Link>
      </div>

      <ul className="navbar__links">
        <li>
          <div className="searchlogo">
            {search ? (
              <div
                style={{
                  width: "50vw",
                  height: "95%",
                }}
              >
                <input
                  style={{
                    width: "50%",
                    height: "30px",
                    backgroundColor: "#333",
                    marginRight: "10px",
                    paddingLeft: "10px",
                    fontSize: "14px",
                  }}
                />

                <i class="fas fa-search" onClick={() => setSearch(search)}></i>
              </div>
            ) : (
              <i class="fas fa-search" onClick={() => setSearch(search)}></i>
            )}
          </div>
        </li>
        <li>
          <Dropdown>
            <Dropdown.Toggle
              className="dropdown__toggle"
              style={{ backgroundColor: "#000", borderColor: "#000" }}
              id="dropdown-basic"
            >
              <i class="fas fa-user"></i>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {isLoggedIn && (
                <Dropdown.Item href="/profile">Profile</Dropdown.Item>
              )}

              {!isLoggedIn && (
                <Dropdown.Item href="/auth">SignUp</Dropdown.Item>
              )}
              {isLoggedIn && (
                <Dropdown.Item href="/logout">Logout</Dropdown.Item>
              )}
            </Dropdown.Menu>
          </Dropdown>
          {/* <Link to="/auth" className="userlogo"></Link> */}
        </li>
        <li>
          <Link to="/inventory" className="shop">
            <i class="fas fa-shopping-bag"></i>
          </Link>
        </li>

        <li>
          <Link to="/cart/:id" className="cart__link">
            <i className="fas fa-shopping-cart"></i>
            <span>
              <span className="cartlogo__badge">0</span>
            </span>
          </Link>
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
