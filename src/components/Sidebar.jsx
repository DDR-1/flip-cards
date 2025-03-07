import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = ({ setCurrentSection }) => {
  return (
    <div className="sidebar">
      <Link to="/"><button>FlashCards</button></Link>
      <Link to="/upload"><button>Upload</button></Link>
      <Link to="/generate"><button>Generate</button></Link>
    </div>
  );
};

export default Sidebar;