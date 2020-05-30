import {connect} from 'react-redux';
import FindUsers from './FindUsers';
import { followActionCreator, unfollowActionCreator, setUsersActionCreator } from '../../redux/users/reducer';

const mapStateToProps = (state) => {
    return {
        users: state.usersReducer.users
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
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FindUsers);
