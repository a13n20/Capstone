import React, { useState } from 'react';

function SearchBar({ onSearch }) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
        
        clearTimeout(window.searchTimeout);
        window.searchTimeout = setTimeout(() => {
            onSearch(event.target.value);
        }, 300);
    };

    return (
        <input
            type="text"
            placeholder="Search guides..."
            value={searchTerm}
            onChange={handleChange}
        />
    );
}

export default SearchBar;