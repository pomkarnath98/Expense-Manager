import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from "./Components/Login"
import { Route } from "react-router-dom"
import Register from './Components/Register';



function App() {
  return (
    <div className="App">
      
      <Route path="/" exact component = {Login}/>
      <Route path="/signup" component = {Register}/>
    </div>
  );
}

export default App;
