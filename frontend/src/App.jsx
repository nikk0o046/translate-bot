import React, { useState } from 'react'
import './App.css'

import Header from './components/Header';
import FileSelector from './components/FileSelector';
import LanguageSelector from './components/LanguageSelector';
import SubmitButton from './components/SubmitButton';
import DownloadBox from './components/DownloadBox';
import SubtitleViewer from './components/SubtitleViewer';

const App = () => {
  const [selectedFile, setSelectedFile] = useState(null)
  const [selectedLanguages, setSelectedLanguages] = useState(null)
  const [uploadedFileName, setUploadedFileName] = useState(null)  // new state variable for uploaded file name
  const [responseBody, setResponseBody] = useState(null);

  const handleFileSelect = (file) => {
    console.log('Selected file:', file);
    setSelectedFile(file);
    setUploadedFileName(file.name);  // update the uploaded file name when a file is selected
  }

  const handleLanguageSelect = (event) => {
    const selectedLanguages = Array.from(event.target.selectedOptions, option => option.value);
    setSelectedLanguages(selectedLanguages);
  }
  

  const handleSubmit = () => {
    if (!selectedFile || !selectedLanguages) {
      alert("Please select a file and a language.");
      return;
    }
  
    const data = new FormData();
    data.append("file", selectedFile);
    data.append("targetLanguages", JSON.stringify(selectedLanguages));
    data.append("sourceLanguage", "English")
  
    fetch('https://europe-north1-grand-eye-390516.cloudfunctions.net/translating-bot-backend', {
      method: 'POST',
      body: data,
    })
    .then(response => response.json())
    .then(responseData => {
      // Handle the response data from the server here
      setResponseBody(responseData);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }  

  return (
    <div className="App">
      <Header />
      <FileSelector onFileSelect={handleFileSelect} />
      {uploadedFileName && <p>{uploadedFileName} uploaded successfully.</p>}
      <div className="language-section">
        <LanguageSelector onLanguageSelect={handleLanguageSelect} />
      </div>
      <div className="submit-section">
        <SubmitButton onSubmit={handleSubmit} />
      </div>
      <div>
      <SubtitleViewer responseBody={responseBody} />
      </div>
    </div>
  )
}

export default App
