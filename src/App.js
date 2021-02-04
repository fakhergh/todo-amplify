import React from "react";
import { Router, Switch, Route, Redirect } from "react-router-dom";

import { Auth, Todo } from "./pages";
import history from "./history";

const App = function () {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Todo} />
        <Route path="/auth" component={Auth} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default App;
