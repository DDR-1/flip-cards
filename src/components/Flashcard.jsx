import React, { useState } from 'react';
import './Flashcard.css';

const Flashcard = ({ flashcard }) => {
  const [flip, setFlip] = useState(false);

  return (
    <div className={`card ${flip ? 'flip' : ''}`} onClick={() => setFlip(!flip)}>
            <div className="front">
                {flashcard.title}
                
            </div>
            <div className="back">{flashcard.info}</div>
        </div>
  );
};

export default Flashcard;
