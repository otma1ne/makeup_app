import { apiClient } from "./axiosConfig";

export default {
  getProducts() {
    return apiClient.get("/products");
  },
  getProduct(id) {
    return apiClient.get(`/products/${id}`);
  },
};
