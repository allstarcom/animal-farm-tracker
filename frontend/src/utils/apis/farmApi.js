import axios from 'axios';
import { API_BASE_URL } from '../apiConfig';


export const fetchFarms = async () => {
  return await axios.get(`${API_BASE_URL}farms/getAllFarms`);
};