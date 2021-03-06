import React from 'react'
import Users from './Users'
import { connect } from 'react-redux'
import {
    getUserThunkCreator,
    getUserChangedThunkCreator,
    followThunkCreator,
    unfollowThunkCreator,
} from '../../redux/users/actions'
import {
    getUsersSelector,
    getPageSize,
    getTotalUsersCount,
    getCurrentPage,
    getIsFetching,
    getIsFollowingInProgress,
} from '../../redux/users/selectors'
import Preloader from '../common/Preloader/Preloader'

class UserContainer extends React.Component {
    componentDidMount () {
        this.props.getUserThunkCreator(this.props.currentPage, this.props.pageSize)
    }
    onClickPageChanged (page) {
        this.props.getUserChangedThunkCreator(page, this.props.pageSize)
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
                            isFetching={this.props.isFetching}
                            isFollowingInProgress={this.props.isFollowingInProgress}
                            followThunkCreator={this.props.followThunkCreator}
                            unfollowThunkCreator={this.props.unfollowThunkCreator}
                        />
                }
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: getUsersSelector(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        isFollowingInProgress: getIsFollowingInProgress(state),
    }
}

export default connect(mapStateToProps, {
    getUserThunkCreator,
    getUserChangedThunkCreator,
    followThunkCreator,
    unfollowThunkCreator,
})(UserContainer)
