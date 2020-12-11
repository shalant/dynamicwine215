import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Wines from "./pages/Wines";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path={["/", "/wines"]}>
            <Wines />
          </Route>
          <Route exact path="/wines/:id">
            <Detail />
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
