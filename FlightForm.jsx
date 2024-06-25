import React, { useState, useEffect } from 'react';
import { getFlights, createFlight, updateFlight, deleteFlight } from './services/flightService';

function FlightForm() {
  const [flights, setFlights] = useState([]);
  const [form, setForm] = useState({ flightNumber: '', departure: '', arrival: '', status: '' });
  const [editing, setEditing] = useState(false);
  const [currentId, setCurrentId] = useState(null);

  useEffect(() => {
    loadFlights();
  }, []);

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
        await updateFlight(currentId, form);
      } else {
        await createFlight(form);
      }
      setForm({ flightNumber: '', departure: '', arrival: '', status: '' });
      setEditing(false);
      loadFlights();
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const handleEdit = (flight) => {
    setForm(flight);
    setEditing(true);
    setCurrentId(flight.id);
  };

  const handleDelete = async (id) => {
    try {
      await deleteFlight(id);
      loadFlights();
    } catch (error) {
      console.error('Error deleting flight:', error);
    }
  };

  return (
    <div>
      <h2>Flights</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Flight Number"
          value={form.flightNumber}
          onChange={(e) => setForm({ ...form, flightNumber: e.target.value })}
          required
        />
        <input
          type="datetime-local"
          placeholder="Departure"
          value={form.departure}
          onChange={(e) => setForm({ ...form, departure: e.target.value })}
          required
        />
        <input
          type="datetime-local"
          placeholder="Arrival"
          value={form.arrival}
          onChange={(e) => setForm({ ...form, arrival: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Status"
          value={form.status}
          onChange={(e) => setForm({ ...form, status: e.target.value })}
          required
        />
        <button type="submit">{editing ? 'Update' : 'Create'}</button>
      </form>
      <ul>
        {flights.map((flight) => (
          <li key={flight.id}>
            {flight.flightNumber} - {new Date(flight.departure).toLocaleString()} - {new Date(flight.arrival).toLocaleString()} - {flight.status}
            <button onClick={() => handleEdit(flight)}>Edit</button>
            <button onClick={() => handleDelete(flight.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FlightForm;
