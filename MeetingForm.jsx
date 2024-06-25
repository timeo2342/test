import React, { useState, useEffect } from 'react';
import { getMeetings, createMeeting, updateMeeting, deleteMeeting } from './services/meetingService';

function MeetingForm() {
  const [meetings, setMeetings] = useState([]);
  const [form, setForm] = useState({ title: '', date: '', location: '' });
  const [editing, setEditing] = useState(false);
  const [currentId, setCurrentId] = useState(null);

  useEffect(() => {
    loadMeetings();
  }, []);

  const loadMeetings = async () => {
    try {
      const response = await getMeetings();
      setMeetings(response.data);
    } catch (error) {
      console.error('Error loading meetings:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editing) {
        await updateMeeting(currentId, form);
      } else {
        await createMeeting(form);
      }
      setForm({ title: '', date: '', location: '' });
      setEditing(false);
      loadMeetings();
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const handleEdit = (meeting) => {
    setForm(meeting);
    setEditing(true);
    setCurrentId(meeting.id);
  };

  const handleDelete = async (id) => {
    try {
      await deleteMeeting(id);
      loadMeetings();
    } catch (error) {
      console.error('Error deleting meeting:', error);
    }
  };

  return (
    <div>
      <h2>Meetings</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
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
          placeholder="Location"
          value={form.location}
          onChange={(e) => setForm({ ...form, location: e.target.value })}
          required
        />
        <button type="submit">{editing ? 'Update' : 'Create'}</button>
      </form>
      <ul>
        {meetings.map((meeting) => (
          <li key={meeting.id}>
            {meeting.title} - {meeting.date} - {meeting.location}
            <button onClick={() => handleEdit(meeting)}>Edit</button>
            <button onClick={() => handleDelete(meeting.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MeetingForm;
