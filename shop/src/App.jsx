import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./pages/styles/App.css";
import Shop from "./pages/Shoping.jsx";
import Cart from "./pages/Cart.jsx";
import Header from "./pages/Header.jsx";
import Footer from "./pages/Footer.jsx";

function App() {
  return (
    <div className="app-container">
      <Header />
      <Switch>
        <Route exact path="/Shop">
          <Shop />
        </Route>
        <Route path="/Cart">
          <Cart />
        </Route>
      </Switch>
        <Footer />
    </div>
  );
}

export default App;
