import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = ({ setCurrentSection }) => {
  return (
    <div className="sidebar">
      <Link to="/"><button onClick={() => setCurrentSection('flashcards')}>FlashCards</button></Link>
      <Link to="/upload"><button onClick={() => setCurrentSection('upload')}>Upload</button></Link>
      <Link to="/generate"><button onClick={() => setCurrentSection('generate')}>Generate</button></Link>
    </div>
  );
};

export default Sidebar;