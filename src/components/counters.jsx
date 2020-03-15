import React from "react";
import Counter from "./counter";

const Counters = ({ counters, onDelete, onIncrement, onReset }) => {
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
        />
      ))}
    </React.Fragment>
  );
};

export default Counters;
