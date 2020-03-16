import React from "react";

// Stateless Functional Component
// We can not use lifecycle hooks in this kind of components

const Navbar = ({ totalCounters }) => {
  // console.log("Navbar - Rendered");

  return (
    <nav className="navbar navbar-dark bg-dark">
      <a className="navbar-brand" href="#">
        <span className="badge badge-secondary badge-pill">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default Navbar;
