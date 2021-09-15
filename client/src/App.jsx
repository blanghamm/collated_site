import { useRoutes } from "solid-app-router";
import io from "socket.io-client";
import fetchRoutes from "./api/routes";
import { createSignal } from "solid-js";
import { AppProvider } from "./store/app-store";
import { config } from "./api/config/constants";
const url = config.url.API_URL_BASE;
const socket = io(url);

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
