import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 1
  };

  handleIncrement = input => {
    console.log("Input :: ", input);
    let { count } = this.state;
    count++;
    this.setState({ count });
  };

  render() {
    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement({ id: 1 })}
          className="m-2 btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let counterBadgeClasses = "badge m-2";
    counterBadgeClasses +=
      this.state.count === 0 ? " badge-warning" : " badge-primary";
    return counterBadgeClasses;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
