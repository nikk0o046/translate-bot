import React from 'react';

const SubtitleViewer = ({ responseBody }) => {
  const handleDownload = (language) => {
    // Access translated content for this language
    const translatedContent = responseBody[language].translation;

    // Create a Blob with the .srt file content
    const blob = new Blob([translatedContent], { type: 'text/plain' });

    // Generate a download URL for the Blob
    const downloadUrl = URL.createObjectURL(blob);

    // Create a link element to trigger the download
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = `${language}_translated.srt`;

    // Append the link to the document body and trigger the download
    document.body.appendChild(link);
    link.click();

    // Clean up by revoking the object URL after download
    URL.revokeObjectURL(downloadUrl);
  };

  return (
    <div>
      {responseBody && Object.keys(responseBody).map((language) => (
        <div key={language}>
          <h2>{language}</h2>
          <pre>{responseBody[language].translation}</pre>
          <button onClick={() => handleDownload(language)}>Download {language} .srt File</button>
        </div>
      ))}
    </div>
  );
};

export default SubtitleViewer;
;
