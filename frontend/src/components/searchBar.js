import React, { useState } from 'react';
import Fuse from 'fuse.js';

function SearchBar({ data, onSearch }) {
    const [searchTerm, setSearchTerm] = useState('');

    const fuse = new Fuse(data, {
        keys: [ // adjusts which key affects the search result more
            { name:'title', weight: 0.7 },
            { name: 'preview', weight: 0.3}
        ],
        threshold: 0.3, // lower is more precise matches
        distance: 50, // lower prioritized closer similarity
        ignoreLocation: true, // looks at full text
    });

    const handleChange = (event) => {
        const query = event.target.value;
        setSearchTerm(query);

        if (!query.trim()) {
            onSearch(data);
            return;
        }

        const results = fuse.search(query);
        const sortedGuides = [...results.map(res => res.item)];
        const nonMatchingGuides = data.filter(guide => !sortedGuides.includes(guide));

        onSearch([...sortedGuides, ...nonMatchingGuides]);
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