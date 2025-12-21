import axios from "axios";

const base_api_url = "http://localhost:8000/api/v1";

const api = axios.create({ baseURL: base_api_url });

api.interceptors.request.use((config) => {
  const tokenString = sessionStorage.getItem("token");
  const token = tokenString ? JSON.parse(tokenString) : null;
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default {
  getRegister: (data) => api.post("/auth/register", data),
  getLogin: (data) => api.post("/auth/login", data),
  getLogout: () => api.post("/auth/logout"),
};

