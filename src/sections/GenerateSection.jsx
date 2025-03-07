import React, { useState } from 'react';
import FlashcardList from '../components/FlashcardList';

const GenerateSection = ({ addFlashcards }) => {
  const [topic, setTopic] = useState('');
  const [numFlashcards, setNumFlashcards] = useState(5); // Default to 5 flashcards
  const [flashcards, setFlashcards] = useState([]);
  const [generateStatus, setGenerateStatus] = useState('');

  const generateFlashcards = async (topic, numFlashcards) => {
    const response = await fetch('http://127.0.0.1:5000/generate_flashcards', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text: topic, num_flashcards_limit: numFlashcards }), // Use the number of flashcards as a parameter
    });
    const data = await response.json();
    return data.flashcards;
  };

  const handleGenerate = async () => {
    if (topic) {
      setGenerateStatus('Generating flashcards (This may take time)...');
      const generatedFlashcards = await generateFlashcards(topic, numFlashcards);
      const folderName = topic;
      addFlashcards(folderName, generatedFlashcards);
      setFlashcards(generatedFlashcards);
      setGenerateStatus('Flashcards generated successfully!');
    }
  };

  return (
    <div>
      <h2>Generate Flashcards</h2>
      <p>Enter a topic to generate flashcards:</p>
      <input
        type="text"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        placeholder="Enter topic"
      />
      <p>Enter the number of flashcards to generate:</p>
      <input
        type="number"
        value={numFlashcards}
        onChange={(e) => setNumFlashcards(e.target.value)}
        placeholder="Enter number of flashcards"
      />
      <button onClick={handleGenerate}>Generate</button>
      {generateStatus && <p>{generateStatus}</p>}
      {flashcards.length > 0 && (
        <div>
          <h3>Preview of Generated Flashcards</h3>
          <FlashcardList flashcards={flashcards} />
        </div>
      )}
    </div>
  );
};

export default GenerateSection;