import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AppProvider } from "./contexts/AppContext";

import { Home } from "./pages/Home";
import { User } from "./pages/User";

export default function Routes() {
  return (
      <Router>
        <AppProvider>
          <Route exact path="/" component={Home} />
          <Route path="/user" component={User} />
        </AppProvider>
      </Router>
  );
}