import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { HashRouter } from "react-router-dom";
import NavBar from "./component/NavBar/NavBar";
import Header from "./component/Header/Header";
import Contact from "./component/Contact/Contact";

import routes from "./route";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        {routes}
        <Contact name="contactMe" />
      </div>
    );
  }
}

export default App;
