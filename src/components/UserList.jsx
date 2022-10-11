import React, { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { Avatars } from './Avatars';

const UserList = ({
    users
}) => {

    const avatarURL = 'https://api.lorem.space/image/face?w=150&h=150';

    return (
        <>
            {
                users.map((user) => (
                    <div key={user.id} className='users-list'><Skeleton />
                        <img className='user-avatar' src={user.avatarUrl} />
                        <div className='user-info'>
                            <p className='user-name'>{user.firstName} {user.lastName}  <span>{user.userTag}</span></p>
                            <p className='user-position'>{user.position} </p>
                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default UserList;
