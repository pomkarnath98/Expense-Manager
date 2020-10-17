import React from "react";
import "./App.css";
import Login from "./Components/Login";
import { Route } from "react-router-dom";
import Register from "./Components/Register";
import Dashboard from "./Components/Dashboard";
import Ledger from "./Components/Ledger";

function App() {
  return (
    <div className="App">
      <Route path="/" exact render={(props) => <Login {...props} />} />
      <Route path="/signup" render={(props) => <Register {...props} />} />
      <Route path="/dashboard" render={(props) => <Dashboard />} />
      {/* <Ledger /> */}
    </div>
  );
}

export default App;
