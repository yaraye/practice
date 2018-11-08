import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Members from "./pages/Members";
import Detail from "./pages/Detail";
import Account from "./pages/Account";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

// import Login from './components/Login';

const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Members} />
        <Route exact path="/members" component={Members} />
        <Route exact path="/members/:id" component={Detail} />
        <Route exact path="/account" component={Account} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
