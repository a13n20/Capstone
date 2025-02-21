import React from "react";
import '../pages.css';
import BackButton from '../../components/backButton';

export const CreditBureauFreezePreview = () => {
    return (
        <div className='guidePage'>
            <p>Learn how to protect your credit by freezing your credit reports for each credit bureau.</p>
        </div>
    );
};

const CreditBureauFreeze = () => {
    return (
        <div className='guidePage'>
            <BackButton />
            <h1>How to Freeze credit Bureaus</h1>
            <h2>Why freeze them?</h2>
            <h2>Equifax</h2>
            <h2>Experian</h2>
            <h2>TransUnion</h2>
        </div>
    )
}

export default CreditBureauFreeze;