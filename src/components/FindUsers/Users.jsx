import React from 'react';
import * as axios from 'axios';
import {NavLink} from 'react-router-dom';
import userPicture from '../../assets/images/user.jpg';
import './Users.css';

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

                                        axios
                                            .post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {}, {
                                                withCredentials: true,
                                                headers: {
                                                    "API-KEY": '558ed2bb-e4e2-4dbc-a682-f2f52a931637',
                                                },
                                            })
                                            .then(response => {
                                                if(response.data.resultCode == 0) {
                                                    props.follow(user.id);
                                                }
                                            })
                                    }}>Follow</button>
                                    : <button className="user-item__follow" onClick={ () => {

                                        axios
                                            .delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {
                                                withCredentials: true,
                                                headers: {
                                                    "API-KEY": '558ed2bb-e4e2-4dbc-a682-f2f52a931637',
                                                },
                                            })
                                            .then(response => {
                                                if(response.data.resultCode == 0) {
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
