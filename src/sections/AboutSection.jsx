import React from "react";
import './AboutSection.css';

const AboutSection = () => {
  return (
    <div className="about-section">
      <h2>About Flashcard Application</h2>
      <p>
        The Flashcard Application is designed to help users create, manage, and study flashcards for various subjects. 
        It provides an easy-to-use interface for creating flashcards, organizing them into folders, and reviewing them 
        to enhance learning and retention.
      </p>
      <h3>Features</h3>
      <ul>
        <li>Create and edit flashcards</li>
        <li>Organize flashcards into folders</li>
        <li>Review flashcards with a user-friendly interface</li>
        <li>Upload and generate flashcards</li>
        <li>Profile management</li>
      </ul>
      <h3>Technologies Used</h3>
      <ul>
        <li>React</li>
        <li>React Router</li>
        <li>CSS for styling</li>
      </ul>
      <h3>Contact</h3>
      <p>
        For any inquiries or support, please contact us at <a href="mailto:support@flashcardapp.com">support@flashcardapp.com</a>.
      </p>
    </div>
  );
}

export default AboutSection;