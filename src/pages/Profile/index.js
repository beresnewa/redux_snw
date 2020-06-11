import React, { useEffect, useState} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { getUserProfile } from '../../actions'

import {Card} from '../../components';
import './style.css';
import '../../components/Card/style.css'


const ProfilePage = (props) => {
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getUserProfile(props.match.params.index));
 
    }, [props.match.params.index]);

    const user = useSelector(state => state.user.user);
    
    const renderFriends = () => {
        console.log (user);

        return user?.friends.map(item => {
    
            return (
                <div className="card anyclass">
                    <Link
                        key = {item._id}
                        to = {`/users/${item.index}`}
                    >
                        <Card 
                            picture = {item.picture}
                            name = {item.name}
                            index = {item.index}
                        />
                    </Link>
                </div>
            )
        })
    }
    if (user._id !== undefined ){
        return (
            
            <div className="page">
                <span className='textAboutMe'> {`About ${user?.name?.first}`} </span>
                <span className='textAboutUser'>{user?.about}</span>
                <span className="textMyFriends">{`${user?.name?.first}'s friends`}</span>
                <div className="container-users">
                    {renderFriends()}
                </div>
            </div>
        );
    } return (
        <div>ЛОХ ПИДР НЕТ ДРУЗЕЙ</div>
        
    )
}

export default ProfilePage;

