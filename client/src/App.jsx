import { useRoutes } from "solid-app-router";
import io from "socket.io-client";
import fetchRoutes from "./api/routes";
import { createEffect, createSignal } from "solid-js";
import { AppProvider } from "./store/app-store";

const urlDev = "http://localhost:4000/";
const urlProd = "/";
const socket = io(urlProd);

function App() {
  //Pass userId through context
  const dataFunc = () => {
    const [userId, setUserId] = createSignal();
    socket.on("socket", (data) => {
      setUserId(data);
      console.log(userId());
    });
    return userId;
  };
  //Test of sockets, works fine
  const Routes = useRoutes(fetchRoutes);
  return (
    <AppProvider socketId={dataFunc()}>
      <Routes />
    </AppProvider>
  );
}

export default App;
