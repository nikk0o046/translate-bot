import React from 'react';

const DownloadBox = ({ files }) => (
    <div>
      {files.map((file, index) => (
        <div key={index}>
          <span>{file.name}</span>
          <button>Download</button>
        </div>
      ))}
    </div>
  );

export default DownloadBox;
