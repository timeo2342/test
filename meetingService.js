import axios from 'axios';

const API_URL = 'http://localhost:3001/meetings';

export const getMeetings = () => axios.get(API_URL);
export const createMeeting = (data) => axios.post(API_URL, data);
export const updateMeeting = (id, data) => axios.put(`${API_URL}/${id}`, data);
export const deleteMeeting = (id) => axios.delete(`${API_URL}/${id}`);
