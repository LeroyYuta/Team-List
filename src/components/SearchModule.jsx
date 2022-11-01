import React, { useState, useEffect } from 'react';
import { BtnList } from './BtnList';
import { BsFilterRight } from "react-icons/bs";
import axios from "axios";
import UserList from './UserList';
import ListSkeleton from './ListSkeleton';

const SearchModule = () => {
    const baseURL = 'https://stoplight.io/mocks/kode-frontend-team/koder-stoplight/86566464/users';
    const loadingUsers = 12;

    const [value, setValue] = useState('');
    const [users, setUsers] = useState([]);
    const [example, setExample] = useState('all');
    const [isLoading, setIsLoading] = useState(true);

    const getUsers = () => {
        axios.get(baseURL, {
            params: {
                __example: example
            }
        })
            .then((response) => {
                setUsers(response.data.items);
                setIsLoading(!isLoading);
                console.log(response.data.items);
            })
            .catch((error) => {
                console.error(error)
            })
    }

    useEffect(() => {
        getUsers()
    }, [example]);

    const handleClick = (e) => {
        const btnTarget = e.target.classList.value;
        setExample(btnTarget);
        setIsLoading(true);

        console.log(users);
    }

    const filteredUsers = users.filter((user) => {
        const userFirstName = user.firstName.toLowerCase().includes(value.toLowerCase());
        const userLastName = user.lastName.toLowerCase().includes(value.toLowerCase());
        const userTagValue = user.userTag.toLowerCase().includes(value.toLowerCase());

        return userFirstName || userLastName || userTagValue;
    });

    const handlePopup = () => {

    }

    return (
        <div className="app">
            <div className='top-box'>
                <h1 className='title'>Search</h1>
                <div className="icon icon-search">
                    <input
                        className='search-input'
                        type='text'
                        placeholder='Enter first name, last name or tag...'
                        onChange={(e) => setValue(e.target.value)}
                    />
                    <button
                        className='text-field__aicon'
                        onClick={handlePopup}>
                        <BsFilterRight />
                    </button>
                </div>
                <div className='filter-bar'>
                    {
                        BtnList.map((btn) => (
                            <button
                                key={btn.id}
                                className={
                                    example === btn.className
                                        ? btn.className + ' button-active'
                                        : btn.className
                                }
                                onClick={handleClick}>
                                {btn.label}
                            </button>
                        ))
                    }
                </div>
                {isLoading && <ListSkeleton list={loadingUsers} />}
                <UserList
                    users={filteredUsers}
                    isLoading={isLoading}
                />
            </div>
        </div>
    )
}

export default SearchModule;
