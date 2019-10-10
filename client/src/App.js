import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Store from "./pages/Store";
import AddProduct from "./pages/AddProduct";
import EditProduct from "./pages/EditProduct";
import ViewProduct from "./pages/ViewProduct";
import Cart from "./pages/Cart";
import Auth from "./pages/Auth"

// import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
// import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        {/* <Nav /> */}
        <Switch>
          <Route exact path="/" component={Store} />

          <Route exact path="/addProduct" component={AddProduct} />
          <Route exact path="/editProduct/:id" component={EditProduct} />
          <Route exact path="/product/:id" component={ViewProduct} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/login" component={Auth} />

          {/* <Route exact path="/books" component={Books} />
          <Route exact path="/books/:id" component={Detail} /> */}
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
