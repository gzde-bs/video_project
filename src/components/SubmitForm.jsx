import React from 'react';

const SubmitForm = ({ formName }) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>{formName}</h2>
            {/* Add form fields here */}
            <button type="submit">Submit</button>
        </form>
    );
};

export default SubmitForm;
