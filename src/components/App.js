import React, { Component } from "react";
import logo from "../logo.svg";
import Section1 from "./Section1";
import "../stylesheet/App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Section1 />
      </div>
    );
  }
}

export default App;
