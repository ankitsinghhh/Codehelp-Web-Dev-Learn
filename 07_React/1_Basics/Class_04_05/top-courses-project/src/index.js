import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// for toast , import the below two lines
import { ToastContainer } from "react-toastify"; // imprting toast
import "react-toastify/dist/ReactToastify.css" // imprting css for toast

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

  <div>
      <App />
      <ToastContainer />

  </div>
  
);
