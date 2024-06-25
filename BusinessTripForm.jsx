import React, { useState, useEffect } from 'react';
import {
  getBusinessTrips,
  createBusinessTrip,
  updateBusinessTrip,
  deleteBusinessTrip
} from './services/businessTripService';
import { getMeetings } from './services/meetingService';
import { getFlights } from './services/flightService';

function BusinessTripForm() {
  const [businessTrips, setBusinessTrips] = useState([]);
  const [meetings, setMeetings] = useState([]);
  const [flights, setFlights] = useState([]);
  const [form, setForm] = useState({ destination: '', date: '', status: '', meetingId: '', flightId: '' });
  const [editing, setEditing] = useState(false);
  const [currentId, setCurrentId] = useState(null);

  useEffect(() => {
    loadBusinessTrips();
    loadMeetings();
    loadFlights();
  }, []);

  const loadBusinessTrips = async () => {
    try {
      const response = await getBusinessTrips();
      setBusinessTrips(response.data);
    } catch (error) {
      console.error('Error loading business trips:', error);
    }
  };

  const loadMeetings = async () => {
    try {
      const response = await getMeetings();
      setMeetings(response.data);
    } catch (error) {
      console.error('Error loading meetings:', error);
    }
  };

  const loadFlights = async () => {
    try {
      const response = await getFlights();
      setFlights(response.data);
    } catch (error) {
      console.error('Error loading flights:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editing) {
        await updateBusinessTrip(currentId, form);
      } else {
        await createBusinessTrip(form);
      }
      setForm({ destination: '', date: '', status: '', meetingId: '', flightId: '' });
      setEditing(false);
      loadBusinessTrips();
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const handleEdit = (trip) => {
    setForm(trip);
    setEditing(true);
    setCurrentId(trip.id);
  };

  const handleDelete = async (id) => {
    try {
      await deleteBusinessTrip(id);
      loadBusinessTrips();
    } catch (error) {
      console.error('Error deleting business trip:', error);
    }
  };

  return (
    <div>
      <h2>Business Trips</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Destination"
          value={form.destination}
          onChange={(e) => setForm({ ...form, destination: e.target.value })}
          required
        />
        <input
          type="date"
          placeholder="Date"
          value={form.date}
          onChange={(e) => setForm({ ...form, date: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Status"
          value={form.status}
          onChange={(e) => setForm({ ...form, status: e.target.value })}
          required
        />
        <select
          value={form.meetingId}
          onChange={(e) => setForm({ ...form, meetingId: e.target.value })}
          required
        >
          <option value="" disabled>Select Meeting</option>
          {meetings.map((meeting) => (
            <option key={meeting.id} value={meeting.id}>
              {meeting.title} - {meeting.date}
            </option>
          ))}
        </select>
        <select
          value={form.flightId}
          onChange={(e) => setForm({ ...form, flightId: e.target.value })}
          required
        >
          <option value="" disabled>Select Flight</option>
          {flights.map((flight) => (
            <option key={flight.id} value={flight.id}>
              {flight.flightNumber} - {flight.departure}
            </option>
          ))}
        </select>
        <button type="submit">{editing ? 'Update' : 'Create'}</button>
      </form>
      <ul>
        {businessTrips.map((trip) => (
          <li key={trip.id}>
            {trip.destination} - {trip.date} - {trip.status}
            <button onClick={() => handleEdit(trip)}>Edit</button>
            <button onClick={() => handleDelete(trip.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BusinessTripForm;
