import { render } from "solid-js/web";
import "./index.css";
import App from "./App";
import { Router } from "solid-app-router";

render(() => {
  return (
    <Router>
      <App />
    </Router>
  );
}, document.getElementById("root"));
