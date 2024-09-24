import React, { useState } from 'react';
import './App.css';  // Importing the CSS file

function App() {
  const [text, setText] = useState('');
  const [searchString, setSearchString] = useState('');
  const [replaceString, setReplaceString] = useState('');

  // Function to count unique words
  const getUniqueWordCount = (text) => {
    const words = text.toLowerCase().match(/\b\w+\b/g);  // Match only words
    const uniqueWords = new Set(words);
    return uniqueWords.size;
  };

  // Function to count characters excluding spaces and punctuation
  const getCharacterCount = (text) => {
    const cleanedText = text.replace(/[^a-zA-Z0-9]/g, '');  // Remove spaces and punctuation
    return cleanedText.length;
  };

  // Handle text input change
  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  // Handle Replace All button click
  const handleReplaceAll = () => {
    // Update the text directly with the replaced content
    const replaced = text.replaceAll(searchString, replaceString);
    setText(replaced);
  };

  return (
    <div className="container">
      <h2 className="header">Real-Time Text Analysis</h2>
      <textarea
        className="textarea"
        rows="10"
        placeholder="Type or paste your text here..."
        value={text}
        onChange={handleTextChange}
      />
      <div className="stats-container">
        <h4 className="stats-header">Statistics</h4>
        <p className="stats-item">Unique Word Count: {getUniqueWordCount(text)}</p>
        <p className="stats-item">Character Count (Excluding Spaces & Punctuation): {getCharacterCount(text)}</p>
      </div>

      <div className="replace-container">
        <h4 className="replace-header">String Replacement</h4>
        <input
          className="input-field"
          type="text"
          placeholder="Search string"
          value={searchString}
          onChange={(e) => setSearchString(e.target.value)}
        />
        <input
          className="input-field"
          type="text"
          placeholder="Replace with"
          value={replaceString}
          onChange={(e) => setReplaceString(e.target.value)}
        />
        <button className="replace-button" onClick={handleReplaceAll}>Replace All</button>
      </div>
    </div>
  );
}

export default App;
