import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import FlashcardList from './components/FlashcardList';
import Sidebar from './components/Sidebar';
import FlashcardsSection from './sections/FlashcardsSection';
import UploadSection from './sections/UploadSection';
import GenerateSection from './sections/GenerateSection';
import TopBar from './components/TopBar';
import ProfileSection from './sections/ProfileSection';
import AboutSection from './sections/AboutSection';
import initialFolders from './components/initialList';
import './App.css';


function App() {
  const [folders, setFolders] = useState(initialFolders);

  const addFlashcards = (folderName, newFlashcards) => {
    setFolders((prevFolders) => ({
      ...prevFolders,
      [folderName]: newFlashcards,
    }));
  };

  return (
    <Router>
      <div className="app-container">
        <TopBar />
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/" element={<FlashcardsSection folders={folders} />} />
            {Object.keys(folders).map(folder => (
              <Route key={folder} path={`/${folder}`} element={<FlashcardList flashcards={folders[folder]} />} />
            ))}
            <Route path="/upload" element={<UploadSection addFlashcards={addFlashcards} />} />
            <Route path="/generate" element={<GenerateSection addFlashcards={addFlashcards} />} />
            <Route path="/profile" element={<ProfileSection />} />
            <Route path="/about" element={<AboutSection />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;