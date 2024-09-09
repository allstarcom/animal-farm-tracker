import axios from 'axios';
import { API_BASE_URL } from '../apiConfig';

export const fetchAnimals = async () => {
  return await axios.get(`${API_BASE_URL}animals/getAllAnimals`);
};

export const fetchAnimalById = async (id) => {
  return await axios.get(`${API_BASE_URL}/animals/${id}`);
};

export const createAnimal = async (sectionId, data) => {
  return await axios.post(`${API_BASE_URL}/sections/${sectionId}/animals`, data);
};

export const updateAnimal = async (id, data) => {
  return await axios.put(`${API_BASE_URL}/animals/${id}`, data);
};

export const deleteAnimal = async (id) => {
  return await axios.delete(`${API_BASE_URL}/animals/${id}`);
};
