import React from 'react';
import { Link } from 'react-router-dom';

const FlashcardsSection = ({ folders }) => {
  return (
    <div>
      {Object.keys(folders).map(folder => (
        <Link key={folder} to={`/${folder}`}><button>{folder}</button></Link>
      ))}
    </div>
  );
};

export default FlashcardsSection;