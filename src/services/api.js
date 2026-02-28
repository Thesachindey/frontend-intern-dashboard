import axios from 'axios';

const api = axios.create({
  baseURL: 'https://task-api-eight-flax.vercel.app',
});

export const loginUser = async (email, password) => {
  const response = await api.post('/api/login', { email, password });
  return response.data;
};

export const fetchDashboardData = async (token) => {
  // Passing the token in the Authorization header is key for the "Bonus" task
  const response = await api.get('/api/dashboard', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};