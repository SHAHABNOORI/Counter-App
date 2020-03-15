import React from "react";

const Navbar = ({ totalCounters }) => {
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
