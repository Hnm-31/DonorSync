import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api';

// Create an axios instance
const API1 = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor to include the JWT token
API1.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`; // Use backticks for template literals
  }
  return config;
});

export default API1; // Export the instance