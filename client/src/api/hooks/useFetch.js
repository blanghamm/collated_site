import { createSignal } from "solid-js";
import { config } from "../config/constants";
const url = config.url.API_URL_OUTPUTS;

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
  sendOutput(url, data);
}
