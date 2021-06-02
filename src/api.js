import axios from "axios";

const api = axios.create({
  baseURL: "https://developerapis.stg-alefedge.com/et",
  timeout: 1000,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
    "mode": "no-cors",
    "api_key": process.env.REACT_APP_EDGE_API,
  },
});

export default api;
