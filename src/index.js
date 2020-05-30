import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import App from "./App";
import RotateProvider from "./RotateProvider";

ReactDOM.render(
  <React.StrictMode>
    <RotateProvider>
      <App />
    </RotateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
