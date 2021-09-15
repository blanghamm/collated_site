import { createResource } from "solid-js";
import { config } from "../config/constants";
const url = config.url.API_URL_OUTPUTS;

const fetchOutputs = async () => (await fetch(url)).json();

export default function useData() {
  const [data, { refetch }] = createResource(fetchOutputs);
  return { data, refetch };
}
