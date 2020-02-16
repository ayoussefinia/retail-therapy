import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Store from "./pages/Store";
import AddProduct from "./pages/AddProduct";
import EditProduct from "./pages/EditProduct";
import MyOrders from "./pages/MyOrders/MyOrders"
import MyProducts from "./pages/MyProducts/MyProducts"
import ViewProduct from "./pages/ViewProduct";
import Checkout from "./pages/Checkout/Checkout"
import Cart from "./pages/Cart";
// import Auth from "./pages/Auth";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";

//auth 
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import PrivateRoute from "./components/private-route/PrivateRoute";
import Dashboard from "./components/dashboard/Dashboard";

//redux
import { Provider } from "react-redux";
import store from "./store";
import NoMatch from "./pages/NoMatch";

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
// Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./login";
  }
}

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          {/* <Nav /> */}
          <Switch>
            <Route exact path="/" component={Store} />
    
            <PrivateRoute exact path="/addProduct" component={AddProduct} />
            <PrivateRoute exact path="/myProducts" component={MyProducts} />
            <PrivateRoute exact path="/myOrders" component={MyOrders} />
            <Route exact path="/editProduct/:id" component={EditProduct} />
            <Route exact path="/product/:id" component={ViewProduct} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/checkout" component={Checkout} />
            {/* <Route exact path="/login" component={Auth} /> */}
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
            {/* <Route exact path="/books" component={Books} />
            <Route exact path="/books/:id" component={Detail} /> */}
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
