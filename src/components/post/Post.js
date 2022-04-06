import React from 'react';

const Post = ({post}) => {
    const {id, userId, title, body} = post
    return (
        <div>
            <p>{id}</p>
            <p>{userId}</p>
            <p>{title}</p>

        </div>
    );
};

export  {Post};