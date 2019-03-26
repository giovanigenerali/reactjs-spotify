import axios from 'axios';

const api = axios.create({
  baseURL: process.env.HOST_API || process.env.REACT_APP_HOST_API || 'http://localhost:3001',
});

export default api;
