import React from "react";
import '../pages.css';
import BackButton from '../../components/backButton';

import equifaxHomeImage from '../../images/guidePages/EquifaxHome.png';
import equifaxLogInButtonImage from '../../images/guidePages/EquifaxLogInButton.png';
import equifaxPlanSelectImage from '../../images/guidePages/EquifaxPlanOptions.png';
import equifaxBeforeFreeze from '../../images/guidePages/EquifaxBeforeFreeze.png';
import equifaxAfterFreeze from '../../images/guidePages/EquifaxAfterFreeze.png';

const title = "How to Freeze credit Bureaus";
const preview = "Learn how to protect your credit by freezing your credit reports for Equifax, Experian, and TransUnion.";

export const creditBureauFreeze = { title, preview };

const CreditBureauFreeze = () => {
    return (
        <div className='guidePage'>
            <BackButton />
            <h1>{title}</h1>
            <p>There's a simple and easy way to stay safe online that most people overlook: <b>freezing your credit bureau accounts.</b> Freezing an account means no new lines of credit can be opened through that credit bureau. While your existing credit cards and loans will continue to work as normal, no one can apply for a mortgage, credit card, or loan in your name until the account is unfrozen. The best practice is to keep the account frozen and only unfreeze it for a specified period of time. This guide will explain why this is important, and also walk you through how to freeze and temporarily unfreeze each of your three credit bureau reports.</p>
            <h2>Why freeze them?</h2>
            <p>Identity theft is a frightening experience, yet many people assume <i>"It won't happen to me."</i> This attitude could contrubute to the 290,000 reported cased of identity theft in just the third quarter of 2024—117,000 of which were cases of credit card fraud (Caporal, 2025). No one wants become a victim, but one form of identity theft you <i>can</i> actively protect yourself against is credit card fraud, the most common type of identity theft since 2022 (Federal Trade Commission, 2024). Regardless of whether you see this as a major concern, protecting yourself is simple and requires minimal effort—making it worth taking the extra precaustions.</p>
            <h2>Getting Set-Up</h2>
            <p>Before you take the steps to create the accounts for each credit bureau, make sure you keep some things in mind:</p>
            <ul className='points'>
                <li><b>Ensure you are on the official website</b> for each credit bureau. There are fake websites that steal sensitive information. Use the links provided in this article or check the safety of the link by pasting it in the <a href="https://nordvpn.com/link-checker/" target="_blank">NordVPN link checker</a>—if the link is safe, it will appear green!</li>
                <li><b>Use a unique password for each account.</b> Reusing passwords accrosss multiple sites increases the risk of attackers gaining access to all your accounts if one is compromised. Keep your passwords safe in a password manager or write them down in a secure, <i>physical</i> location.</li>
                <li><b>Consider creating a separate email for your credit bureau accounts.</b> Use this email exclusively for those accounts. Since credit bureaus won't contact you directly, a separate email will make it easier to spot phishing attempts in your primary inbox. Yes, this also needs is <i>own, unique password.</i></li>
            </ul>
            <p>Securing these accounts is <i>crucial</i>—following these tips will help keep your information safe.</p>
            <h2>Equifax</h2>
            <h3>Freeze</h3>
            <ul className='steps'>
                <li><b>Navigate to <a href="https://www.equifax.com" target="_blank">Equifax.com</a>.</b> It should look like this: <img src={equifaxHomeImage} alt='Equifax home page. A gray "Log In" button is on the top right. "Your Credit, Your Identity" displayed at the top left in black letters with a bright orange "SIGN UP NOW" button is on the right below. An image of a phone is on the right displaying an Equifax phone app.' />
                </li>
                <li><b>Click the "Log In" button.</b> Ignore the "SIGN UP NOW" button. This will lead you to sign up for a paid plan. <img src={equifaxLogInButtonImage} alt='A blue "Login" button is on the left with a white "Choose My Plan" button on the right.' /> <i>If you have an account already, click "Login" and skip to step 5.</i> If you need to make an account, click "Choose My Plan" and continue to the next step.</li>
                <li><b>Select your plan.</b> I suggest selecting the free plan on the left for now. You can always upgrade later. <img src={equifaxPlanSelectImage} alt='Three plan options are listed. The leftmost plan is free, the middle is $4.95/month, and the rightmost one is $9.95/month. Each one has a "GET STARTED" button.' /></li>
                <li><b>Follow Equifax's steps.</b> Remember to <i>use a unique password,</i> and if you created a new email <i>sign up with that email.</i> Once your account is created, log in.</li>
                <li><b>Click "Place a freeze"</b> located on your Dashboard. It's located on the right side of the screen and it looks like this: <img src={equifaxBeforeFreeze} alt='A blue snowflake in a circle that says "Your Equifax credit report is not frozen" and blue text that says "Place a freeze."' /> If your Dashboard says "Your Equifax credit report is frozen." then you don't need to proceed with any further steps.</li>
                <li><b>Follow Equifax's steps.</b> Once your account is frozen, a green checkmark will appear. You can download a confirmation PDF for your personal records, if you want.</li>
            </ul>
            <h3>Unfreeze</h3>
            <ul className='steps'>
                <li><b>Log in</b> to your Equifax account.</li>
                <li><b>Click "Manage a freeze"</b> on your Dashboard. It's located on the right side of the screen and it looks like this: <img src={equifaxAfterFreeze} alt='A blue snowflake in a circle that says "Your Equifax credit report is frozen" and blue text that says "Manage a freeze."' /></li>
                <li><b>Select to temporarily or permanently lift the freeze.</b> I recommend temporarily lifting the freeze. This ensures that the account will refreeze on a specified date if you forget to do it yourself. If you choose to temporarily lift the freeze, enter the dates you want the freeze lifted on the next page.</li>
            </ul>
            <h2>Experian</h2>
            <h2>TransUnion</h2>
            <h2>Sources</h2>
            <ul className='sources'>
                <li>Caporal, 2025 - <a href="https://www.fool.com/money/research/identity-theft-credit-card-fraud-statistics/" target="_blank">"Identity Theft and Credit Card Fraud Statistics for 2024"</a></li>
                <li>Equifax - <a href="https://www.equifax.com" target="_blank">Equifax</a></li>
                <li>Experian - <a href="https://www.experian.com/lpt/credit-score-tmpl.html?conf=frsc_b&pc=sem_exp_google&cc=sem_exp_google_ad_27946959_153535696290_689294283589_kwd-22992561_b___k_Cj0KCQiAq-u9BhCjARIsANLj-s0MP1XAq4TWJZtF5pPLKLQUFNZj9A-fdkGZ0edoUD6LUVB2WMGvvZwaAkWREALw_wcB_k_&ref=brand&awsearchcpc=1&gad_source=1&gbraid=0AAAAAD4mgc-QRYYCTANjG6y9CqGISXhYP&gclid=Cj0KCQiAq-u9BhCjARIsANLj-s0MP1XAq4TWJZtF5pPLKLQUFNZj9A-fdkGZ0edoUD6LUVB2WMGvvZwaAkWREALw_wcB" target="_blank">Experian</a></li>
                <li>Federal Trade Commission, 2024 - <a href="https://public.tableau.com/app/profile/federal.trade.commission/viz/IdentityTheftReports/TheftTypesOverTime" target="_blank">"Compare Identity Theft Report Types"</a></li>
                <li>NordVPN - <a href="https://nordvpn.com/link-checker/" target="_blank">NordVPN link checker</a></li>
                <li>TransUnion - <a href="https://www.transunion.com/?atvy=%7B%22264995%22%3A%22Experience+B%22%7D">TransUnion</a></li>
            </ul>
        </div>
    )
}

export default CreditBureauFreeze;