# Flashcard Application

## Overview

The Flashcard Application is designed to help users create, manage, and study flashcards for various subjects. It provides an easy-to-use interface for creating flashcards, organizing them into folders, and reviewing them to enhance learning and retention.

## Features

- Create and edit flashcards
- Organize flashcards into folders
- Review flashcards with a user-friendly interface
- Upload flashcards from a CSV file
- Generate flashcards using AI
- Profile management

## Components

### React Components

- **App.jsx**: The main component that sets up the router and renders the top bar, sidebar, and content based on the current route.
- **FlashcardList.jsx**: Displays a list of flashcards.
- **Sidebar.jsx**: Provides navigation links to different sections of the app.
- **FlashcardsSection.jsx**: Displays the folders and their flashcards.
- **UploadSection.jsx**: Allows users to upload flashcards from a CSV file.
- **GenerateSection.jsx**: Allows users to generate flashcards using AI.
- **TopBar.jsx**: Displays the top bar with navigation links.
- **ProfileSection.jsx**: Displays the user's profile information.
- **AboutSection.jsx**: Provides information about the application.

### Flask Backend

- **app.py**: The Flask backend that handles generating flashcards using the Ollama model.

## Installation

### Prerequisites

- Node.js and npm
- Python and pip

### Frontend Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/flashcard-app.git
   cd flashcard-app
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```

### Backend Installation

1. Navigate to the backend folder:
   ```bash
   cd flashcard-generator
   ```
2. Create a virtual environment and activate it:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On macOS/Linux
   venv\Scripts\activate     # On Windows
   ```
3. Install the dependencies:
   ```bash
   pip install -r requirements.txt
   ```
4. Install Ollama from website and run server in background with 'Mistral' model and runn following command:
   ```bash
   pip install -r requirements.txt
   ```
5. Start the Flask server:
   ```bash
   python app.py
   ```

## Usage

### Upload Flashcards
1. Navigate to the "Upload" section.
2. Select a CSV file with the following format:
   ```csv
   word,description
   What is the capital of France?,Paris
   ```
3. Click "Upload" to upload the flashcards.

### Generate Flashcards
1. Navigate to the "Generate" section.
2. Enter a topic and the number of flashcards to generate.
3. Click "Generate" to create flashcards using AI.

### Review Flashcards
1. Navigate to the home page.
2. Select a folder to view its flashcards.
3. Review the flashcards.

## Folder Structure

```
flashcard-app/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── FlashcardList.jsx
│   │   │   ├── Sidebar.jsx
│   │   │   ├── FlashcardsSection.jsx
│   │   │   ├── UploadSection.jsx
│   │   │   ├── GenerateSection.jsx
│   │   │   ├── TopBar.jsx
│   │   │   ├── ProfileSection.jsx
│   │   │   ├── AboutSection.jsx
│   ├── App.jsx
│   ├── index.js
│   ├── [package.json](http://_vscodecontentref_/1)
├── backend/
│   ├── app.py
│   ├── requirements.txt
│   ├── models/
│   ├── utils/
│   ├── static/
│   ├── templates/
├── [README.md](http://_vscodecontentref_/2)
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.

