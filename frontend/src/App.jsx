import React, { useState } from 'react'
import './App.css'

import Header from './components/Header';
import FileSelector from './components/FileSelector';
import LanguageSelector from './components/LanguageSelector';
import SubmitButton from './components/SubmitButton';
import DownloadBox from './components/DownloadBox';

const App = () => {
  const [selectedFile, setSelectedFile] = useState(null)
  const [selectedLanguage, setSelectedLanguage] = useState(null)
  const [receivedFiles, setReceivedFiles] = useState([])
  const [uploadedFileName, setUploadedFileName] = useState(null)  // new state variable for uploaded file name

  const languages = ["English", "Spanish", "French", "German"] 

  const handleFileSelect = (file) => {
    console.log('Selected file:', file);
    setSelectedFile(file);
    setUploadedFileName(file.name);  // update the uploaded file name when a file is selected
  }

  const handleLanguageSelect = (event) => {
    setSelectedLanguage(event.target.value)
  }

  const handleSubmit = () => {
    // TODO: Add logic to send selectedFile and selectedLanguage to the backend
  }

  return (
    <div className="App">
      <Header />
      <FileSelector onFileSelect={handleFileSelect} />
      {uploadedFileName && <p>{uploadedFileName} uploaded successfully.</p>}
      <div className="language-section">
        <LanguageSelector languages={languages} onLanguageSelect={handleLanguageSelect} />
      </div>
      <div className="submit-section">
        <SubmitButton onSubmit={handleSubmit} />
      </div>
      <DownloadBox files={receivedFiles} />
    </div>
  )
}

export default App
