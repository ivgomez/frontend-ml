import axios from "axios";

const createAxiosInstance = () => {
  const config = {
    baseURL: process.env.API_URL_PROD,
    headers: {
      ContentType: "application/json",
      timeout: 1000,
    },
  };

  const instance = axios.create(config);
  return instance;
};

export const Service = () => createAxiosInstance();
