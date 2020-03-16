import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import App from "./App";
ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// let counters = [
//   { id: 1, value: 0 },
//   { id: 2, value: 0 },
//   { id: 3, value: 0 },
//   { id: 4, value: 0 }
// ];

// let test = [...counters];
// test[0] = { ...counters[0] };
// test[0].value++;

// console.log(counters[0]);
