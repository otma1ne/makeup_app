import { apiClient } from "./axiosConfig";

export default {
  register(user) {
    return apiClient.post("/users", user);
  },
  /* getUsers() {
    return apiClient.get(`/users`);
  }, */
};
