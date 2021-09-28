import { Link } from "react-router-dom";
import React, { useState } from "react";

import "./index.css";

const NavBar = ({ click, cart }) => {
  const [search, setSearch] = useState(true);
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
          <Link to="/user" className="userlogo">
            <i class="fas fa-user"></i>
          </Link>
        </li>
        <li>
          <Link to="/inventory" className="shop">
            <i class="fas fa-shopping-bag"></i>
          </Link>
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
