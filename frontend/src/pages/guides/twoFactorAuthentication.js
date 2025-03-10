import React from "react";
import '../pages.css';
import BackButton from '../../components/backButton';

const title = "Setting up Two-Factor Authentication";
const preview = "Learn how to protect your accounts with two-factor authentication.";

export const twoFactorAuth = { title, preview };

const TwoFactorAuthentication = () => {
    return (
        <div className='guidePage'>
            <BackButton />
            <h1>{title}</h1>
            <h2>Why have it?</h2>
            <h2>Trustworthy Tools</h2>
            <BackButton />
        </div>
    )
}

export default TwoFactorAuthentication;