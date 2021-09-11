import { createResource } from "solid-js";

export default function UserID(id) {
  const [data] = createResource(id);
  return data;
}
