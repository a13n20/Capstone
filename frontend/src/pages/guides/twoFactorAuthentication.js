import React from "react";
import '../pages.css';

export const TwoFactorAuthPreview = () => {
    return (
        <div className='guidePage'>
            <p>Learn how to protect your accounts with two-factor authentication.</p>
        </div>
    );
};

const TwoFactorAuthentication = () => {
    return (
        <div className='guidePage'>
            <h1>Setting up Two-Factor Authentication</h1>
            <h2>Why have it?</h2>
            <h2>Trustworthy Tools</h2>
        </div>
    )
}

export default TwoFactorAuthentication;