import { Service } from "./baseService";

const api = {
  async search(query: string) {
    const result = await Service().get(`/api/items?q=${query || ""}`);
    return result;
  },
  async getItemById(id: string) {
    const result = await Service().get(`/api/items/${id}`);
    return result;
  },
};

export default api;
