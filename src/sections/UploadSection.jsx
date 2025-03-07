import React, { useState } from 'react';
import Papa from 'papaparse';
import FlashcardList from '../components/FlashcardList';

const UploadSection = ({ addFlashcards }) => {
  const [file, setFile] = useState(null);
  const [flashcards, setFlashcards] = useState([]);
  const [uploadStatus, setUploadStatus] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (file) {
      Papa.parse(file, {
        header: true,
        complete: (results) => {
          const flashcards = results.data.map((row, index) => ({
            id: Date.now() + index,
            title: row.word,
            info: row.description,
          }));
          const folderName = file.name.split('.').slice(0, -1).join('.');
          addFlashcards(folderName, flashcards);
          setFlashcards(flashcards);
          setUploadStatus('File uploaded successfully!');
        },
      });
    }
  };

  return (
    <div>
      <h2>Upload Section</h2>
      <p>Here you can upload your files. Please upload only a csv file</p>
      <input type="file" accept=".csv" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
      {uploadStatus && <p>{uploadStatus}</p>}
      {flashcards.length > 0 && (
        <div>
          <h3>Preview of Uploaded Flashcards</h3>
          <FlashcardList flashcards={flashcards} />
        </div>
      )}
    </div>
  );
};

export default UploadSection;