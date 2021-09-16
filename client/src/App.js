import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Components
import ServerConnected from "./components/ServerConnected";
import NavBar from "./components/NavBar";
import MenuBackdrop from "./components/MenuBackdrop";
import MenuSideDrawer from "./components/MenuSideDrawer";
import CartSideDrawer from "./components/CartSideDrawer";
import CartBackdrop from "./components/CartBackdrop";

//Pages
import HomePage from "./pages/HomePage";
//import CategoryPage from "./pages/CategoryPage";
import InventoryPage from "./pages/InventoryPage";
import CartPage from "./pages/CartPage";
import DisplayProductDetail from "./pages/DisplayProductDetail";

function App() {
  const [menuToggle, setMenuToggle] = useState(false);

  const [cartToggle, setCartToggle] = useState(false);

  return (
    <Router>
      <NavBar
        click={() => setMenuToggle(true)}
        cart={() => setCartToggle(true)}
      />
      <MenuSideDrawer show={menuToggle} click={() => setMenuToggle(false)} />
      <MenuBackdrop show={menuToggle} click={() => setMenuToggle(false)} />

      <CartSideDrawer show={cartToggle} cart={() => setCartToggle(false)} />
      <CartBackdrop show={cartToggle} cart={() => setCartToggle(false)} />
      <main>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/inventory" component={InventoryPage} />
          <Route exact path="/cart/:id" component={CartPage} />
          <Route exact path="/inventory/id" component={DisplayProductDetail} />
        </Switch>
      </main>
      <ServerConnected />
    </Router>
  );
}

export default App;
