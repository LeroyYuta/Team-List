import React from 'react';
import SearchModule from './SearchModule';
import { IoIosArrowBack } from "react-icons/io";
import { AiOutlineStar } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";

const UserCard = ({
    users
}) => {
    return (
        <div className='card'>
            <div className='card-header'>
                {/* <Router> */}
                {/* <Link to='/'><IoIosArrowBack /></Link> */}


                {/* </Router> */}

                <div className='user-info'>
                    <img src={users} />
                    <p className='user-info__name'></p>
                    <p className='user-info__position'></p>
                </div>
            </div>
            <div className='user-birthsday'>
                <p className='birthsday'><AiOutlineStar /></p>
                <p className='years-old'></p>
            </div>
            <div className='user-phone'>
                <p className='phone'><BsTelephone /></p>
            </div>
        </div>
    )
}

export default UserCard;
