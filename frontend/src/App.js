import React from "react";
import "./App.css";
import Login from "./Components/Login";
import { Route } from "react-router-dom";
import Register from "./Components/Register";
import Dashboard from "./Components/Dashboard";

function App() {
  return (
    <div className="App">
      {/* <Route path="/" exact component={Login} />
      <Route path="/signup" render={(props) => <Register {...props} />} /> */}
      <Dashboard />
    </div>
  );
}

export default App;
