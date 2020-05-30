import React from 'react';
import * as axios from 'axios';
import Users from './Users';
import {connect} from 'react-redux';
import {
    followActionCreator,
    unfollowActionCreator,
    setUsersActionCreator,
    setCurrentPageActionCreator,
    setTotalCountActionCreator,
} from '../../redux/users/reducer';

class UserContainer extends React.Component {

    componentDidMount = () => {
        axios
        .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        .then(response => {
            this.props.setUsers(response.data.items)
            this.props.totalUsersCountReady(response.data.totalCount)
        })
    }

    onClickPageChanged = (page) => {
        axios
        .get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
        .then(response => {
            this.props.setCurrentPage(page)
            this.props.setUsers(response.data.items)
        })
    }

    render = () => {
        return (
            <Users
                users={this.props.users}
                totalUsersCount={this.props.totalUsersCount}
                currentPage={this.props.currentPage}
                pageSize={this.props.pageSize}
                onClickPageChanged={this.onClickPageChanged}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersReducer.users,
        pageSize: state.usersReducer.pageSize,
        totalUsersCount: state.usersReducer.totalUsersCount,
        currentPage: state.usersReducer.currentPage,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followActionCreator(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowActionCreator(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersActionCreator(users))
        },
        setCurrentPage: (page) => {
            dispatch(setCurrentPageActionCreator(page))
        },
        totalUsersCountReady: (total) => {
            dispatch(setTotalCountActionCreator(total))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
