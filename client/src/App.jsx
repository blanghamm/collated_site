import io from "socket.io-client";
import { lazy, onMount } from "solid-js";
import { useRoutes } from "solid-app-router";
const socket = io("http://localhost:4000/");

const routes = [
  {
    path: "/",
    component: lazy(() => import("./views/Home")),
  },
  {
    path: "/project",
    component: lazy(() => import("./views/Project_1")),
  },
];
function App() {
  const Routes = useRoutes(routes);
  onMount(() => {
    socket.on("session", (data) => {
      console.log(data);
    });
  });
  return (
    <div>
      <Routes />
    </div>
  );
}

export default App;
