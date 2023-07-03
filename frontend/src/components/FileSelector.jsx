import React from 'react';

const FileSelector = ({ onFileSelect }) => {
    const fileInputRef = React.useRef();

    const handleClick = () => {
        // trigger the file input click event
        fileInputRef.current.click();
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            onFileSelect(file);
        }
    };

    return (
        <div>
            <input
                type="file"
                style={{ display: 'none' }} // hide the default file input
                ref={fileInputRef}
                onChange={handleFileChange}
                accept=".srt"
            />
            <button onClick={handleClick}>Choose a file</button> {/* custom file select button */}
        </div>
    );
};

export default FileSelector;
