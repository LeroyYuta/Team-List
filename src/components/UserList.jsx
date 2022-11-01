import React, { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import UserCard from './UserCard';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";

const UserList = ({
    users
}) => {

    return (
        <>
            {
                users.map((user) => (
                    <div key={user.id} className='users-list'>
                        {/* <Router> */}
                        <Link to='/userCard'><Skeleton />
                            <img
                                className='user-avatar'
                                src={user.avatarUrl}
                            />
                            <div className='user-info'>
                                <p className='user-name'>{user.firstName} {user.lastName}  <span>{user.userTag}</span></p>
                                <p className='user-position'>{user.position} </p>
                            </div>
                        </Link>

                        {/* <Routes>
                                <Route path='/userCard' element={<UserCard users={users} />} />
                            </Routes> */}
                        {/* </Router> */}
                    </div>
                ))
            }
        </>
    )
}

export default UserList;
