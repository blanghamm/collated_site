import { createResource } from "solid-js";

const fetchOutputs = async () =>
  (await fetch("http://localhost:8080/api/outputs")).json();

export default function useData() {
  const [data, { refetch }] = createResource(fetchOutputs);
  return { data, refetch };
}
