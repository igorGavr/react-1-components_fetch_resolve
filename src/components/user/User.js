import React from 'react';
import './user.css'

const User = ({user}) => {
    const {name, id, username} = user
    return (
        <div className={user.id%2 ? 'userGreen' : 'userRed'}>
            <p>{id}</p>
            <p>{name}</p>
            <p>{username}</p>
        </div>
    );
};

export {User};