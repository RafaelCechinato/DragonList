import axios from 'axios';

const api = axios.create({
    baseURL: 'https://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon',
    headers: {
        'Content-Type': 'application/json',
    },
});

export const get = async (url, params = {}) => {
    try {
      const response = await api.get(url, { params });
      return response.data;
    } catch (error) {
      console.error('Erro ao realizar GET:', error);
      throw error;
    }
};

export const remove = async (url, params = {}) => {
  try {
    const response = await api.delete(url, { params });
    return response.data;
  } catch (error) {
    console.error('Erro ao realizar Delete:', error);
    throw error;
  }
};