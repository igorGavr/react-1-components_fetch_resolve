import React, {useEffect, useState} from 'react';
import {usersService} from "../../services";
import {User} from "../user/User";
import {UserInfo} from "../userInfo/UserInfo";
import './Users.css'

const Users = () => {
    const [users, setUsers] = useState([])
    const [chosenUser, setChosenUser] = useState(null)

    useEffect(() => {
        usersService.getAllUsers()
            .then(value => setUsers(value))
    }, [])
    const chooseUser = (id) => {
        const chosenUser = users.find(value => value.id === id)
        setChosenUser(chosenUser)
    }
    return (
        <div >
            <div className={'chosenUser'}>
                {
                    chosenUser && <UserInfo user={chosenUser}/>
                }
            </div>
            <div className={'users'}>
                {
                    users && users.map((user) => <User key={user.id}
                                                       user={user}
                                                       chooseUser={chooseUser}/>)
                }
            </div>
        </div>
    );
};

export {Users};