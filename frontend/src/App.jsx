import React, { useState } from 'react'
import './App.css'

import Header from './components/Header';
import FileSelector from './components/FileSelector';
import SourceLanguageSelector from './components/SourceLanguageSelector';
import LanguageSelector from './components/LanguageSelector';
import SubmitButton from './components/SubmitButton';
import SubtitleViewer from './components/SubtitleViewer';

const App = () => {
  const [selectedFile, setSelectedFile] = useState(null)
  const [sourceLanguage, setSourceLanguage] = useState(null)
  const [selectedLanguages, setSelectedLanguages] = useState(null)
  const [uploadedFileName, setUploadedFileName] = useState(null)  // new state variable for uploaded file name
  const [responseBody, setResponseBody] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleFileSelect = (file) => {
    console.log('Selected file:', file);
    setSelectedFile(file);
    setUploadedFileName(file.name);  // update the uploaded file name when a file is selected
  }

  const handleSourceLanguageSelect = (event) => {
    const sourceLanguage = event.target.value;
    console.log('Selected source language:', sourceLanguage);  // log selected source language
    setSourceLanguage(sourceLanguage);
  }

  const handleLanguageSelect = (event) => {
    const selectedLanguages = Array.from(event.target.selectedOptions, option => option.value);
    console.log('Selected target languages:', selectedLanguages);  // log selected target languages
    setSelectedLanguages(selectedLanguages);
  }
  
  const handleSubmit = () => {
    console.log('Attempting to submit with:', { selectedFile, sourceLanguage, selectedLanguages });  // log all values right before submitting
    if (!selectedFile || !selectedLanguages || !sourceLanguage) {
      alert("Please select a file and both source and target languages.");
      return;
    }

    setIsLoading(true); // set loading state to true when "Translate" button is clicked
  
    const data = new FormData();
    data.append("file", selectedFile);
    data.append("targetLanguages", JSON.stringify(selectedLanguages));
    data.append("sourceLanguage", sourceLanguage)
  
    fetch('https://europe-north1-grand-eye-390516.cloudfunctions.net/translating-bot-backend', {
      method: 'POST',
      body: data,
    })
    .then(response => response.json())
    .then(responseData => {
      // Handle the response data from the server here
      setResponseBody(responseData);
      setIsLoading(false); // set loading state to false when the response is received
    })
    .catch((error) => {
      console.error('Error:', error);
      setIsLoading(false); // set loading state to false even if there was an error
    });
  }  

  return (
    <div className="App">
      <Header />
      <FileSelector onFileSelect={handleFileSelect} />
      {uploadedFileName && <p>{uploadedFileName} uploaded successfully.</p>}
      <div className="language-section">
        <label htmlFor="source-language-selector">Source Language:</label>
        <SourceLanguageSelector id="source-language-selector" onLanguageSelect={handleSourceLanguageSelect} />
        <label htmlFor="target-language-selector">Target Languages:</label>
        <LanguageSelector id="target-language-selector" onLanguageSelect={handleLanguageSelect} />
      </div>
      <div className="submit-section">
        <SubmitButton onSubmit={handleSubmit} />
      </div>
      {isLoading && <p>Translating... Please wait.</p>} {/* loading message */}
      <div>
        <SubtitleViewer responseBody={responseBody} />
      </div>
    </div>
  )
}

export default App
