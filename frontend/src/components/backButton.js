import React from 'react';
import { useNavigate } from 'react-router-dom';

function BackButton() {
    const navigate = useNavigate();
    
    const handleGoBack = () => {
        navigate(-1);
    };

    return (
        <button onClick={handleGoBack}>Back to Guides</button>
    );
}

export default BackButton;