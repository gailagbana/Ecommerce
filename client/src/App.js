import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Components
import ServerConnected from "./components/ServerConnected";
import NavBar from "./components/NavBar";
import Backdrop from "./components/Backdrop";
import SideDrawer from "./components/SideDrawer";

//Pages
import HomePage from "./pages/HomePage";
import InventoryPage from "./pages/InventoryPage";
import CartPage from "./pages/CartPage";
import DisplayProductDetail from "./pages/DisplayProductDetail";

function App() {
  const [sideToggle, setSideToggle] = useState(false);

  return (
    <Router>
      <NavBar click={() => setSideToggle(true)} />
      <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
      <Backdrop show={sideToggle} click={() => setSideToggle(false)} />

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
