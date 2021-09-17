import { For } from "solid-js";
import { Link } from "solid-app-router";
import fetchRoutes from "../api/routes";

const Collated = () => {
  return (
    <div>
      <For each={fetchRoutes}>
        {(item) => (
          <Link
            style={{ display: "flex", flexDirection: "column" }}
            href={item.path}
          >
            {item.path}
          </Link>
        )}
      </For>
    </div>
  );
};

export default Collated;
