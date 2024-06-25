import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import BusinessTripForm from './BusinessTripForm';
import MeetingForm from './MeetingForm';
import FlightForm from './FlightForm';
import LoginForm from './LoginForm';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (status) => {
    setIsLoggedIn(status);
  };

  return (
    <Router>
      <div className="App">
        <Header isLoggedIn={isLoggedIn} />
        <main>
          <Routes>
            {!isLoggedIn ? (
              <Route path="/" element={<LoginForm onLogin={handleLogin} />} />
            ) : (
              <>
                <Route path="/business-trip" element={<BusinessTripForm />} />
                <Route path="/meeting" element={<MeetingForm />} />
                <Route path="/flight" element={<FlightForm />} />
              </>
            )}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
