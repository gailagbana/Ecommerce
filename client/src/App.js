import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Components
//import ServerConnected from "./components/ServerConnected";
import {
  CartBackdrop,
  CartSideDrawer,
  MenuBackdrop,
  MenuSideDrawer,
  NavBar,
  useToken,
} from "./components";
//Pages
import {
  Login,
  SignUp,
  CartPage,
  HomePage,
  InventoryDetails,
  InventoryPage,
} from "./pages";

// function setToken(userToken) {
//   sessionStorage.setItem("token", JSON.stringify(userToken));
// }

function App() {
  const [menuToggle, setMenuToggle] = useState(false);

  const [cartToggle, setCartToggle] = useState(false);

  const { token, setToken } = useToken();

  // if (!token) {
  //   return <Login setToken={setToken} />;
  // }

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
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/inventory/:id" component={InventoryDetails} />
        </Switch>
      </main>
      {/* <ServerConnected /> */}
    </Router>
  );
}

export default App;
