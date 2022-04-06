import React, {useEffect, useState} from 'react';
import {usersService} from "../../services";
import {User} from "../user/User";


const Users = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        usersService.getAllUsers()
            .then(value => setUsers(value))
    }, [])
    return (
        <div >
            {
                users && users.map((user) => <User key={user.id} user={user}/>)
            }
        </div>
    );
};

export {Users};