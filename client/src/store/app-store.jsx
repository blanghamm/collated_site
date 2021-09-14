import { createContext, useContext } from "solid-js";
import { createStore } from "solid-js/store";

const AppContext = createContext([{ id: "" }]);

export const AppProvider = (props) => {
  const [state, setState] = createStore({
      id: props.socketId || "",
    }),
    store = [state];
  return (
    <AppContext.Provider value={store}>{props.children}</AppContext.Provider>
  );
};

export function useId() {
  return useContext(AppContext);
}
