import axios from 'axios';

const API_URL = 'http://localhost:3001/businessTrips';
const FLIGHTS_API_URL = 'http://localhost:3001/flights';
const MEETINGS_API_URL = 'http://localhost:3001/meetings';

export const getBusinessTrips = () => axios.get(API_URL);
export const createBusinessTrip = (data) => axios.post(API_URL, data);
export const updateBusinessTrip = (id, data) => axios.put(`${API_URL}/${id}`, data);
export const deleteBusinessTrip = (id) => axios.delete(`${API_URL}/${id}`);

export const getFlights = () => axios.get(FLIGHTS_API_URL);
export const getMeetings = () => axios.get(MEETINGS_API_URL);
