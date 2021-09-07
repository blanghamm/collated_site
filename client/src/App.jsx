import io from "socket.io-client";
import { createResource, lazy, onMount, For, createEffect } from "solid-js";
import { useRoutes } from "solid-app-router";
import fetchRoutes from "./api/routes";
const socket = io("http://localhost:4000/");

function App() {
  const Routes = useRoutes(fetchRoutes);
  return (
    <div>
      <Routes />
    </div>
  );
}

export default App;
