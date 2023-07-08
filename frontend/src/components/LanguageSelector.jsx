import React from 'react';

const LanguageSelector = ({ onLanguageSelect }) => {

  const languages = [
    "Croatian",
    "Czech",
    "Danish",
    "Dutch",
    "English",
    "Estonian",
    "Finnish",
    "French",
    "German",
    "Greek",
    "Hungarian",
    "Italian",
    "Latvian",
    "Lithuanian",
    "Norwegian",
    "Polish",
    "Portuguese",
    "Romanian",
    "Spanish",
    "Swedish"
    ];
    
    return (
      <select multiple onChange={onLanguageSelect}>
        {languages.map((lang, index) => (
          <option key={index} value={lang}>
            {lang}
          </option>
        ))}
      </select>
    );
};

export default LanguageSelector;
