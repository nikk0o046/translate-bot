import React from 'react';

const SourceLanguageSelector = ({ onLanguageSelect, id }) => {
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
    <select id={id} multiple onChange={onLanguageSelect}>
      {languages.map((lang) => (
        <option key={lang} value={lang}>
          {lang}
        </option>
      ))}
    </select>
  );
};

export default SourceLanguageSelector;
