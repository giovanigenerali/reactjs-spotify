import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_SPOTIFY_API || 'https://localhost:3001',
});

export default api;
