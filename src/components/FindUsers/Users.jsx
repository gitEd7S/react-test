import React from 'react';
import {NavLink} from 'react-router-dom';
import userPicture from '../../assets/images/user.jpg';
import './Users.css';

const Users = (props) => {

    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    const pages = [];

    for(let i = 1; i <= pagesCount; i++) { pages.push(i); }

    const auditLoadDisabled = ($id) => {
        return (
            props.isFollowingInProgress.some(id => id === $id)
                ? 'user-item__follow--disabled'
                : ''
        )
    }

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
                                    <button
                                        className={auditLoadDisabled(user.id) + " user-item__follow"}
                                        onClick={ () => {
                                            !user.followed
                                            ? props.followThunkCreator(user.id)
                                            : props.unfollowThunkCreator(user.id)
                                        }}
                                    > { !user.followed ? 'Follow' : 'Unfollow' } </button>
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
