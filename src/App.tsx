import React from "react";
import "./App.css";
import { AuthGuard } from "./AuthGuard";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import Routes from "./Routes";

export const history = createBrowserHistory({});

function App() {
  return (
    <Router history={history}>
      <AuthGuard>
        <Routes />
      </AuthGuard>
    </Router>
  );
}

export default App;
