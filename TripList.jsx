import React from "react";

const TripList = ({ trips, onEdit, onDelete }) => {
  return (
    <div className="trip-list">
      {trips.map((trip) => (
        <div className="trip-card" key={trip.id}>
          <h3>{trip.title}</h3>
          <p>{trip.description}</p>
          <p>
            {new Date(trip.startTrip).toLocaleDateString()} -{" "}
            {new Date(trip.endTrip).toLocaleDateString()}
          </p>
          <button className="btn-primary" onClick={() => onEdit(trip)}>
            Edit
          </button>
          <button className="btn-danger" onClick={() => onDelete(trip.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default TripList;
