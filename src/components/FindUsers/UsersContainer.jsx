import React from 'react';
import * as axios from 'axios';
import Users from './Users';
import {connect} from 'react-redux';
import {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    totalUsersCountReady,
    toggleIsFetching,
} from '../../redux/users/reducer';
import Preloader from '../common/Preloader/Preloader';

class UserContainer extends React.Component {

    componentDidMount () {

        this.props.toggleIsFetching(true);

        axios
        .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        .then(response => {
            this.props.setUsers(response.data.items);
            this.props.totalUsersCountReady(response.data.totalCount);
            this.props.toggleIsFetching(false);
        })
    }

    onClickPageChanged (page) {

        this.props.toggleIsFetching(true);

        axios
        .get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
        .then(response => {
            this.props.setCurrentPage(page);
            this.props.setUsers(response.data.items);
            this.props.toggleIsFetching(false);
        })
    }

    render () {
        return (
            <>
                {
                    this.props.isFetching
                    ?   <Preloader />
                    :   <Users
                            users={this.props.users}
                            totalUsersCount={this.props.totalUsersCount}
                            currentPage={this.props.currentPage}
                            pageSize={this.props.pageSize}
                            onClickPageChanged={this.onClickPageChanged.bind(this)}
                            follow={this.props.follow}
                            unfollow={this.props.unfollow}
                            isFetching={this.props.isFetching}
                        />
                }
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersReducer.users,
        pageSize: state.usersReducer.pageSize,
        totalUsersCount: state.usersReducer.totalUsersCount,
        currentPage: state.usersReducer.currentPage,
        isFetching: state.usersReducer.isFetching,
    }
}

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    totalUsersCountReady,
    toggleIsFetching,
})(UserContainer);
