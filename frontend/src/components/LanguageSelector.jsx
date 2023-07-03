import React from 'react';

const LanguageSelector = ({ languages, onLanguageSelect }) => {
    return (
      <select onChange={onLanguageSelect}>
        {languages.map((lang, index) => (
          <option key={index} value={lang}>
            {lang}
          </option>
        ))}
      </select>
    );
  };

  export default LanguageSelector;