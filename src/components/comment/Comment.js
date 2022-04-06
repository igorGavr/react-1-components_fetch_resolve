import React from 'react';

const Comment = ({comment}) => {
    const {postId, id, name, email, body} = comment
    return (
        <div>
            <p>{id}</p>
            <p>{postId}</p>
            <p>{name}</p>
            <p>{email}</p>
            <p>{body}</p>
        </div>
    );
};

export  {Comment};