import React, { Component } from "react";
import "./App.css";
import Counter from "./components/counter";

class App extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        <Counter />
      </div>
    );
  }
}

export default App;
