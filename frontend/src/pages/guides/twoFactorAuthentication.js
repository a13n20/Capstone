import React from "react";
import '../pages.css';
import BackButton from '../../components/backButton';

const title = "Setting up Two-Factor Authentication";
const previewText = "Learn how to protect your accounts with two-factor authentication.";

export { title as TwoFactorAuthTitle };
export { previewText as TwoFactorAuthPreview };

const TwoFactorAuthentication = () => {
    return (
        <div className='guidePage'>
            <BackButton />
            <h1>{title}</h1>
            <h2>Why have it?</h2>
            <h2>Trustworthy Tools</h2>
        </div>
    )
}

export default TwoFactorAuthentication;