import axios from 'axios';
import { API_BASE_URL } from './apiConfig';

export const fetchAnimals = () => axios.get(`${API_BASE_URL}/animals/`);
export const fetchAnimalById = (id) => axios.get(`${API_BASE_URL}/animals/${id}`);
export const createAnimal = (sectionId, data) => axios.post(`${API_BASE_URL}/sections/${sectionId}/animals`, data);
export const updateAnimal = (id, data) => axios.put(`${API_BASE_URL}/animals/${id}`, data);
export const deleteAnimal = (id) => axios.delete(`${API_BASE_URL}/animals/${id}`);
