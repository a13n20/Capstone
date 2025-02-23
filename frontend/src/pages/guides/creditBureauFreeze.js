import React from "react";
import '../pages.css';
import BackButton from '../../components/backButton';

const title = "How to Freeze credit Bureaus";
const previewText = "Learn how to protect your credit by freezing your credit reports for Equifax, Experian, and TransUnion.";

export { title as CreditBureauFreezeTitle };
export { previewText as CreditBureauFreezePreview };

const CreditBureauFreeze = () => {
    return (
        <div className='guidePage'>
            <BackButton />
            <h1>{title}</h1>
            <p>There's a simple and easy way to stay safe online that most people overlook, and that's freezing your credit bureau accounts. This guide will explain why this is important, as well as explain how to freeze each of the three credit bureau reports.</p>
            <h2>Why freeze them?</h2>
            <p>Identity theft is a frightening experience, yet many people assume <i>"It won't happen to me."</i> This attitude could contrubute to the 290,000 reported cased of identity theft in just the third quarter of 2024—117,000 of which were cases of credit card fraud (Caporal, 2025). No one wants become a victim, but one form of identity theft you <i>can</i> actively protect yourself against is credit card fraud, the most common type of identity theft since 2022 (Federal Trade Commission, 2024). Regardless of whether you see this as a major concern, protecting yourself is simple and requires minimal effort—making it worth taking the extra precaustions.</p>
            <h2>Equifax</h2>
            <h2>Experian</h2>
            <h2>TransUnion</h2>
            <h2>Sources</h2>
            <ul className='sources'>
                <li>Caporal, 2025 - <a href="https://www.fool.com/money/research/identity-theft-credit-card-fraud-statistics/" target="_blank">"Identity Theft and Credit Card Fraud Statistics for 2024"</a></li>
                <li>Federal Trade Commission, 2024 - <a href="https://public.tableau.com/app/profile/federal.trade.commission/viz/IdentityTheftReports/TheftTypesOverTime" target="_blank">"Compare Identity Theft Report Types"</a></li>
            </ul>
        </div>
    )
}

export default CreditBureauFreeze;