import React from 'react';

const FileUploader = () => {
    const handleFileUpload = (event) => {
        // Handle file upload logic
    };

    return (
        <div>
            <input type="file" onChange={handleFileUpload} />
        </div>
    );
};

export default FileUploader;
