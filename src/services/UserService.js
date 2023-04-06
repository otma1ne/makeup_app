import { apiClient } from "./axiosConfig";

export default {
  register(user) {
    return apiClient.post("/signup", user);
  },

  login(email, password) {
    return apiClient.post("/signin", email, password);
  },

  logout(token) {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    return apiClient.post("/logout", config);
  },

  getUser(token) {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    return apiClient.get("/user", config);
  },
};
