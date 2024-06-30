import React from 'react';
import FileUploader from './FileUploader';
import SubmitForm from './SubmitForm';

const ObjectPage = () => {
    return (
        <div>
            <h1>Object</h1>
            <FileUploader />
            <SubmitForm formName="Form A" />
            
        </div>
    );
};

export default ObjectPage;
