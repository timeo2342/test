import React from 'react';
import { Link } from 'react-router-dom';

function Header({ isLoggedIn }) {
  return (
    <header>
      <nav>
        <ul>
          {!isLoggedIn ? (
            <li>
              <Link to="/">Login</Link>
            </li>
          ) : (
            <>
              <li>
                <Link to="/business-trip">Business Trips</Link>
              </li>
              <li>
                <Link to="/meeting">Meetings</Link>
              </li>
              <li>
                <Link to="/flight">Flights</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
