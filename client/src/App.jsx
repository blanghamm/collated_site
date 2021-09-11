import { useRoutes } from "solid-app-router";
import fetchRoutes from "./api/routes";

function App() {
  //Test of sockets, works fine
  const Routes = useRoutes(fetchRoutes);
  return (
    <div>
      <Routes />
    </div>
  );
}

export default App;
