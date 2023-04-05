import { apiClient } from "./axiosConfig";

export default {
  addToCart(token, userId, productId, quantity) {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const product = {
      productId,
      quantity,
    };
    return apiClient.post(`/user/${userId}/cart`, product, config);
  },

  removeFromCart(token, userId, productId) {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    return apiClient.put(`/user/${userId}/cart/${productId}`, config);
  },
};
