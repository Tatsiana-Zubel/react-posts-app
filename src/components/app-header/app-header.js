import React from 'react';

import './app-header.css';

const AppHeader = ({liked, allPosts}) => {
    return (
        <div className="app-header d-flex">
            <h1>Tatsiana Zubel</h1>
            <h2>{allPosts} posts from which liked {liked}</h2>
        </div>
    )
}

export default AppHeader;