import { apiClient } from "./axiosConfig";

export default {
  getProducts() {
    return apiClient.get("/products");
  },
  getProduct(id) {
    return apiClient.get(`/products/${id}`);
  },

  searchproduct(name) {
    return apiClient.get("/products/search?query=" + name);
  },

  postReview(productId, review) {
    return apiClient.post(`/products/${productId}/reviews`, review);
  },
};
