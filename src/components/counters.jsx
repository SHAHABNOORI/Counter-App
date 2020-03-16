import React from "react";
import Counter from "./counter";

const Counters = ({
  counters,
  onDelete,
  onIncrement,
  onReset,
  onDecrement
}) => {
  // console.log("Counters - Rendered");
  return (
    <React.Fragment>
      <button onClick={onReset} className="btn btn-primary btn-small m-2">
        Reset
      </button>
      {counters.map(counter => (
        <Counter
          key={counter.id}
          counter={counter}
          onDelete={onDelete}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
        />
      ))}
    </React.Fragment>
  );
};

export default Counters;
