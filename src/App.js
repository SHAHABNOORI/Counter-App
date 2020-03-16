import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Counters from "./components/counters";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 1 },
      { id: 2, value: 2 },
      { id: 3, value: 3 },
      { id: 4, value: 4 }
    ]
  };

  constructor(props) {
    super(props);
    console.log("App - Constructor", this.props);
    // the right place to initial state base on props
  }

  componentDidMount() {
    // the right place for Ajax call
    // get data from the server
    console.log("App - Mounted");
  }

  handleDelete = id => {
    let counters = this.state.counters.filter(counter => counter.id !== id);
    this.setState({ counters });
  };

  handleIncrement = selected => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(selected);
    counters[index] = { ...selected };
    counters[index].value++;
    this.setState({ counters });
  };

  componentDidUpdate() {
    console.log("App - Updated");
  }

  handleReset = () => {
    let counters = this.state.counters.map(counter => {
      counter.value = 0;
      return counter;
    });

    this.setState({ counters });
  };
  render() {
    console.log("App - Rendered");
    return (
      <React.Fragment>
        <Navbar
          totalCounters={
            this.state.counters.filter(counter => counter.value > 0).length
          }
        />
        <main className="cntainer">
          <Counters
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            counters={this.state.counters}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
