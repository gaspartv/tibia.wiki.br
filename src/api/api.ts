import axios from "axios";

export const apiTibiaLabs = axios.create({
  baseURL: "https://api.tibialabs.com/v2",
  timeout: 5000,
});

export const apiTibiaData = axios.create({
  baseURL: "https://api.tibiadata.com",
  timeout: 5000,
});
