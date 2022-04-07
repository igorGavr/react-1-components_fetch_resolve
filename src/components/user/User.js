import React from 'react';
import './user.css'

const User = ({user, chooseUser}) => {
    const {name, id, username} = user
    return (
        <div className={user.id%2 ? 'userGreen user' : 'userRed user'}>
            <p>{id}</p>
            <p>{name}</p>
            <p>{username}</p>
            <button onClick={() => chooseUser(user.id)}>User Info</button>
        </div>
    );
};

export {User};