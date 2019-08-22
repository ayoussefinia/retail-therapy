import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Store from "./pages/Store";

// import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Store} />
        
          {/* <Route exact path="/books" component={Books} />
          <Route exact path="/books/:id" component={Detail} /> */}
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
