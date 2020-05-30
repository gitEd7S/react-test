import React from 'react';
import './FindUsers.css';
import * as axios from 'axios';
import userPicture from '../../assets/images/user.jpg'

class FindUsers extends React.Component {

    componentDidMount = () => {
        axios
        .get('https://social-network.samuraijs.com/api/1.0/users')
        .then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render = () => {
        return (
            <div>
                {
                    this.props.users.map(user => {
                        return (
                            <div className="user-item" key={user.id}>
                                <div className="user-item__header">
                                    <figure className="user-item__piture">
                                        <img src={ user.photos.large != null ? user.photos.large : userPicture } alt="" className="user-item__image"/>
                                    </figure>
                                    {
                                        !user.followed
                                        ?
                                        <button
                                            type="button"
                                            className="user-item__follow"
                                            onClick={ () => { this.props.follow(user.id) }}
                                        >Follow</button>
                                        :
                                        <button
                                            type="button"
                                            className="user-item__follow"
                                            onClick={ () => { this.props.unfollow(user.id) }}
                                        >Unfollow</button>
                                    }
                                </div>
                                <div className="user-item__body">
                                    <span className="user-item__name">{ user.name }</span>
                                    {/* <span className="user-item__location">
                                        { user.location.country }, { user.location.city }
                                    </span> */}
                                    <span className="user-item__status">{ user.status }</span>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

export default FindUsers;
