// src/utils/axiosInstance.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8000', // Django server URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
