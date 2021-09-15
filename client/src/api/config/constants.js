const prod = {
  url: {
    API_URL_OUTPUTS: "/api/outputs",
    API_URL_BASE: "/",
  },
};

const dev = {
  url: {
    API_URL_OUTPUTS: "http://localhost:8080/api/outputs",
    API_URL_BASE: "http://localhost:8080/",
  },
};

export const config = process.env.NODE_ENV === "development" ? dev : prod;
