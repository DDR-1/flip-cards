import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import FlashcardList from './components/FlashcardList';
import Sidebar from './components/Sidebar';
import FlashcardsSection from './components/FlashcardsSection';
import UploadSection from './components/UploadsSection';
import GenerateSection from './components/GenerateSection';
import './App.css';

const folders = {
  English1: [
    {
      id: 1,
      title: 'Ephemeral',
      info: 'lasting for a very short time'
    },
    {
      id: 2,
      title: 'Serendipity',
      info: 'the occurrence of events by chance in a happy or beneficial way'
    },
    {
      id: 3,
      title: 'Petrichor',
      info: 'a pleasant smell that frequently accompanies the first rain after a long period of warm, dry weather'
    }
  ],
  English2: [
    {
      id: 4,
      title: 'Limerence',
      info: 'the state of being infatuated or obsessed with another person, typically experienced involuntarily and characterized by a strong desire for reciprocation of one\'s feelings'
    },
    {
      id: 5,
      title: 'Sonder',
      info: 'the realization that each random passerby is living a life as vivid and complex as your own'
    },
    {
      id: 6,
      title: 'Opia',
      info: 'the ambiguous intensity of looking someone in the eye, which can feel simultaneously invasive and vulnerable'
    }
  ],
  English3: [
    {
      id: 7,
      title: 'Monachopsis',
      info: 'the subtle but persistent feeling of being out of place'
    },
    {
      id: 8,
      title: 'Rubatosis',
      info: 'the unsettling awareness of your own heartbeat'
    },
    {
      id: 9,
      title: 'Kenopsia',
      info: 'the eerie, forlorn atmosphere of a place that is usually bustling with people but is now abandoned and quiet'
    }
  ]
};

function App() {
  const [currentSection, setCurrentSection] = useState('flashcards');
  return (
    <Router>
      <div className="app-container">
        <Sidebar setCurrentSection={setCurrentSection} />
        <div className="content">
          {currentSection === 'flashcards' && <FlashcardsSection folders={folders} />}
          <Routes>
            <Route path="/" element={<div>Please Select a folder</div>} />
            {Object.keys(folders).map(folder => (
              <Route key={folder} path={`/${folder}`} element={<FlashcardList flashcards={folders[folder]} />} />
            ))}
            <Route path="/upload" element={<UploadSection />} />
            <Route path="/generate" element={<GenerateSection />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;