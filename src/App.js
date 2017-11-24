import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./Home";
import Movie from "./Movie";
import NotFound from "./NotFound";

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/movie" component={Movie} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default App;
