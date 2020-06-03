import React from 'react';
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
import { API } from '../../api/api';

class UserContainer extends React.Component {

    componentDidMount () {

        this.props.toggleIsFetching(true);

        API.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.setUsers(data.items);
            this.props.totalUsersCountReady(data.totalCount);
            this.props.toggleIsFetching(false);
        })
    }

    onClickPageChanged (page) {

        this.props.toggleIsFetching(true);

        API.getUsers(page, this.props.pageSize).then(data => {
            this.props.setCurrentPage(page);
            this.props.setUsers(data.items);
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
