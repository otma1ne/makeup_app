import axios from "axios";

export const apiClient = axios.create({
  baseURL: "https://make-up-backend.onrender.com",
  withCredentials: true,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
