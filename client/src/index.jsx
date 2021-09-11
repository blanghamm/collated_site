import { render } from "solid-js/web";
import io from "socket.io-client";

import "./index.css";
import App from "./App";
import { Router } from "solid-app-router";
import { createEffect, createResource, createSignal, onMount } from "solid-js";
const socket = io("http://localhost:4000/");

render(() => {
  const [userId, setUserId] = createSignal();
  createEffect(() => {
    socket.on("socket", (data) => {
      console.log("socket in app: ", data);
      setUserId(data);
      console.log(userId());
    });
  });
  const datafunc = () => {
    return userId;
  };
  return (
    <Router data={datafunc}>
      <App />
    </Router>
  );
}, document.getElementById("root"));
