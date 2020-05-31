import React from 'react';
import './User.css'
import userPicture from '../../../assets/images/user.jpg';
import Preloader from '../../common/Preloader/Preloader';

const User = (props) => {

    if(!props.data) { return <Preloader /> }
    else {
        return(
            <article className="main__user user">
                <picture className="user__picture">
                    <img
                        src={props.data.photos != null ? props.data.photos.large : userPicture}
                        alt=''
                        className="user__image"
                    />
                </picture>
                <div className="user__content">
                    <h2 className="user__name"> {props.data.fullName} </h2>
                    <ul className="user__data">
                        <li className="user__item"> {props.data.aboutMe} </li>
                        <li className="user__item"> {props.data.lookingForAJobDescription} </li>
                        <li className="user__item"> {props.data.lookingForAJob ? 'Работаю' : 'Не работаю'} </li>
                        <li className="user__item"> {props.data.contacts != null ? props.data.contacts.facebook : ''} </li>
                        <li className="user__item"> {props.data.contacts != null ? props.data.contacts.instagram : ''} </li>
                    </ul>
                </div>
            </article>
        );
    }
}

export default User;
