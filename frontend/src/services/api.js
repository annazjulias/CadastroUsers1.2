import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // usa a variável do .env
});

export default api;