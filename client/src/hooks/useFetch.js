import { createResource, createSignal } from "solid-js";

const urlProd = "/api/outputs";
const urlDev = "http://localhost:8080/api/outputs";

const sendOutput = async (url, data = {}) => {
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return res.json;
};

export default function useFetch(data) {
  const [output] = createSignal(data);
  sendOutput(urlDev, output());
  return output;
}
