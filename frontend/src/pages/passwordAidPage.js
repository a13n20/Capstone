import React, { useState } from 'react';

import "./pages.css";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const PasswordAidPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [results, setResults] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSearch = async (e) => {
        setLoading(true);
        setResults([]);

        e.preventDefault();
        if (searchTerm.trim() === '') {
            setError("Please enter a search term.");
            return;
        }

        try {
            // Make a GET request to your Django search view
            const response = await fetch(`${BACKEND_URL}/api/passwordaid/search/?q=${searchTerm}`);
            const data = await response.json();

            if (response.ok) {
                setResults(data.results);
                setError(null); // Clear any previous error
            } else {
                setError(data.error || 'Something went wrong!');
            }
        } catch (err) {
            setError("Network error, please try again later.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='guidePage'>
            <div className='intro'>
                <h1>Password Aid</h1>
                <p>"Creating a strong password is one of the most important steps in keeping your accounts safe. In the box below, you can type a password to check if it's commonly used by real people—hackers often try these first! Don't worry, your password won't be stored. If it appears on the list, it's best to choose something stronger."</p>
            </div>
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    placeholder="Search for a password..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <ul>
                {results.length > 0 ? (
                    results.map((result, index) => (
                        <li key={index}>{result}</li>
                    ))
                ) : (
                    <p>No results found.</p>
                )}
            </ul>
        </div>
    );
};

export default PasswordAidPage;