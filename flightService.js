import axios from 'axios';

const API_URL = 'http://localhost:3001/flights';

export const getFlights = () => axios.get(API_URL);
export const createFlight = (data) => axios.post(API_URL, data);
export const updateFlight = (id, data) => axios.put(`${API_URL}/${id}`, data);
export const deleteFlight = (id) => axios.delete(`${API_URL}/${id}`);
