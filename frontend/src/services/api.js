import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  // withCredentials: true // só se estiver usando cookies/sessões
});

export default api;
