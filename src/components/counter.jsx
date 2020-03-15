import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value
  };

  handleIncrement = input => {
    console.log("Input :: ", input);
    let { value } = this.state;
    value++;
    this.setState({ value });
  };

  render() {
    console.log("props :: ", this.props);
    return (
      <div>
        {this.props.children}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement({ id: 1 })}
          className="m-2 btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let counterBadgeClasses = "badge m-2";
    counterBadgeClasses +=
      this.state.value === 0 ? " badge-warning" : " badge-primary";
    return counterBadgeClasses;
  }

  formatCount() {
    const { value } = this.state;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
