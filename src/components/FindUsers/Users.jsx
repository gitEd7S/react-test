import React from 'react';
import * as axios from 'axios';
import {NavLink} from 'react-router-dom';
import userPicture from '../../assets/images/user.jpg';
import './Users.css';
import { API } from '../../api/api';

const Users = (props) => {

    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    const pages = [];

    for(let i = 1; i <= pagesCount; i++) { pages.push(i); }

    return (
        <div>
            <div className="pagination">
                {
                    pages.map(page => {
                        return (
                            <span
                                key={page}
                                onClick={ () => { props.onClickPageChanged(page) } }
                                className= {
                                    props.currentPage === page
                                    ? 'pagination__item active'
                                    : 'pagination__item'
                                }
                            >{page}</span>
                        )
                    })
                }
            </div>
            {
                props.users.map(user => {
                    return (
                        <div className="user-item" key={user.id}>
                            <div className="user-item__header">
                                <NavLink to={`/profile/${user.id}`} className="user-item__piture">
                                    <img
                                        src={ user.photos.large != null ? user.photos.large : userPicture }
                                        alt=""
                                        className="user-item__image"
                                    />
                                </NavLink>
                                {
                                    !user.followed
                                    ? <button className="user-item__follow" onClick={ () => {

                                        API.postFollow(user.id).then(data => {
                                            if(data.resultCode == 0) {
                                                props.follow(user.id);
                                            }
                                        })

                                    }}>Follow</button>
                                    : <button className="user-item__follow" onClick={ () => {

                                        API.postUnfollow(user.id).then(data => {
                                            if(data.resultCode == 0) {
                                                props.unfollow(user.id);
                                            }
                                        })

                                    }}>Unfollow</button>
                                }
                            </div>
                            <div className="user-item__body">
                                <span className="user-item__name">{ user.name }</span>
                                <span className="user-item__status">{ user.status }</span>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Users;
