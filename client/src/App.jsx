import { useRoutes } from "solid-app-router";
import io from "socket.io-client";
import fetchRoutes from "./api/routes";
import { createSignal } from "solid-js";
import { AppProvider } from "./store/app-store";

const urlDev = "http://localhost:8080/";
const urlProd = "/";
const socket = io(urlDev);

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
