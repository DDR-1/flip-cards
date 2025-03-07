import React from 'react';
import { Link } from 'react-router-dom';
import './TopBar.css';

const TopBar = () => {
  return (
    <div className="top-bar">
      <Link to="/" className="title">Flashcard Application</Link>
      <div className="top-bar-links">
        <Link to="/profile">Profile</Link>
        <Link to="/about">About</Link>
      </div>
    </div>
  );
};

export default TopBar;