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

  changeQuantity(token, userId, productId, quantity) {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    return apiClient.put(
      `/user/${userId}/cart/${productId}/quantity`,
      { quantity },
      config
    );
  },

  removeFromCart(token, userId, productId) {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    return apiClient.put(`/user/${userId}/cart/${productId}`, config);
  },

  checkOutCart(token, userId) {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    return apiClient.post(`/user/${userId}/cart/checkout`, config);
  },
};
