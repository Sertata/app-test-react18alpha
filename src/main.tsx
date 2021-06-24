import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

const roteNode = document.getElementById("root")!;

ReactDOM.createRoot(roteNode).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
