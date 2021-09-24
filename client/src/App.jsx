import { useRoutes } from "solid-app-router";
import fetchRoutes from "./api/routes";
import { createSignal, createEffect, createComputed } from "solid-js";
import { AppProvider } from "./store/app-store";
import { createStore } from "solid-js/store";
import { config } from "./api/config/constants";
import io from "socket.io-client";
import { useId } from "./store/app-store";

const url = config.url.API_URL_BASE;
export const socket = io(url);

function App() {
  const [userId, setUserId] = createSignal();
  //Pass userId through context
  socket.on("socket", (data) => {
    setUserId(data);
  });

  createComputed(() => {
    if (userId()) {
      localStorage.setItem("id", userId());
    }
  });

  //Test of sockets, works fine
  const Routes = useRoutes(fetchRoutes);
  return (
    // <AppProvider socketId={dataFunc()}>
    <Routes />
    // </AppProvider>
  );
}

export default App;
