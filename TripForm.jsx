import React, { useState, useEffect } from "react";

const TripForm = ({ onAdd, onUpdate, currentTrip, setCurrentTrip }) => {
  const [trip, setTrip] = useState({
    id: null,
    title: "",
    description: "",
    startTrip: "",
    endTrip: "",
    meetings: [],
  });

  useEffect(() => {
    if (currentTrip) {
      setTrip(currentTrip);
    }
  }, [currentTrip]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTrip({ ...trip, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (trip.title && trip.description && trip.startTrip && trip.endTrip) {
      if (trip.id) {
        onUpdate(trip.id, trip);
      } else {
        onAdd(trip);
      }
      setTrip({
        id: null,
        title: "",
        description: "",
        startTrip: "",
        endTrip: "",
        meetings: [],
      });
    }
  };

  const handleCancel = () => {
    setTrip({
      id: null,
      title: "",
      description: "",
      startTrip: "",
      endTrip: "",
      meetings: [],
    });
    setCurrentTrip(null);
  };

  return (
    <form onSubmit={handleSubmit} className="trip-form">
      <div className="form-group">
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={trip.title}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={trip.description}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="startTrip">Start Date:</label>
        <input
          type="date"
          id="startTrip"
          name="startTrip"
          value={trip.startTrip}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="endTrip">End Date:</label>
        <input
          type="date"
          id="endTrip"
          name="endTrip"
          value={trip.endTrip}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <button type="submit" className="btn-primary">
          {trip.id ? "Update Trip" : "Add Trip"}
        </button>
        <button type="button" className="btn-secondary" onClick={handleCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default TripForm;
