import React, { useEffect, useState } from 'react';
import "./pages.css";

const CyberNews = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetch(`https://django-backend-848546903722.us-central1.run.app/api/cybernews/`)
            .then(res => res.json())
            .then(data => {
                console.log("Fetched News:", data);
                setArticles(data.articles);
            })
            .catch(err => console.error('Error fetching news:', err));
    }, []);

    return (
        <div className="guidePage">
            <h1>Latest Cybersecurity News</h1>
            {articles.length === 0 ? (
                <p>No news found or still loading...</p>
            ) : (
                articles.map((article, index) => (
                    <div key={index} className='newsArticles'>
                        {article.urlToImage && (
                            <img
                                src={article.urlToImage}
                                alt={article.title}
                                className="w-full h-48 object-cover rounded-lg mb-2"
                            />
                        )}
                        <div className='articleInfo'>
                            <a
                                href={article.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xl font-bold text-blue-600 hover:underline"
                            >
                                {article.title}
                            </a>
                            <p>
                                <span>{article.source.name}</span> •{' '}
                                {new Date(article.publishedAt).toLocaleString()}
                            </p>
                            <p>{article.description}</p>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default CyberNews;