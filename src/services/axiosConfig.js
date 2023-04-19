import axios from "axios";

export const apiClient = axios.create({
  baseURL: "https://diamond-closed-scarer.glitch.me",
  withCredentials: true,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
