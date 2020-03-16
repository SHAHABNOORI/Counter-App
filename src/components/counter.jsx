import React, { Component } from "react";

class Counter extends Component {
  componentDidUpdate(prevProps, prevState) {
    // We can decide get new data by ajax , base on changes of states or props
    console.log("prevProps :: ", prevProps);
    console.log("prevState :: ", prevState);
    if (prevProps.counter.value !== this.props.counter.value) {
      // Ajax call and get new data from the server
      console.log("Counter Value Has Been Changed");
    }
  }

  // Is called ,just before a component removed from the dom
  componentWillUnmount() {
    // we can do cleanup terms
    console.log("Counter - Unmounted");
  }

  render() {
    console.log("Counter - Rendered");

    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="m-2 btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let counterBadgeClasses = "badge m-2";
    counterBadgeClasses +=
      this.props.counter.value === 0 ? " badge-warning" : " badge-primary";
    return counterBadgeClasses;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
