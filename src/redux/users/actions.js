import * as types from './types'
import { API } from "@/api/api";

export const follow = (userId) => ({ type: types.FOLLOW_ACTION, userId })
export const unfollow = (userId) => ({ type: types.UNFOLLOW_ACTION, userId })
export const setUsers = (users) => ({ type: types.SET_USERS_ACTION, users })
export const setCurrentPage = (page) => ({ type: types.SET_CURRENT_PAGE, page })
export const totalUsersCountReady = (total) => ({ type: types.SET_TOTAL_COUNT, total })
export const toggleIsFetching = (fetching) => ({ type: types.TOGGLE_IS_FETCHING, fetching })
export const toggleIsFollowingInProgress = (audit, id) => ({ type: types.TOGGLE_IS_FOLLOWING_IN_PROGRESS, audit, id })

export const getUserThunkCreator = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        API.getUsers(currentPage, pageSize).then(data => {
            dispatch(setUsers(data.items));
            dispatch(totalUsersCountReady(data.totalCount));
            dispatch(toggleIsFetching(false));
        })
    }
}

export const getUserChangedThunkCreator = (page, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        API.getUsers(page, pageSize).then(data => {
            dispatch(setCurrentPage(page));
            dispatch(setUsers(data.items));
            dispatch(toggleIsFetching(false));
        })
    }
}

export const followThunkCreator = ($id) => {
    return (dispatch) => {
        dispatch(toggleIsFollowingInProgress(true, $id))
        API.postFollow($id).then(data => {
            if(data.resultCode === 0) {
                dispatch(follow($id));
                dispatch(toggleIsFollowingInProgress(false, $id));
            }
        })
    }
}

export const unfollowThunkCreator = ($id) => {
    return (dispatch) => {
        dispatch(toggleIsFollowingInProgress(true, $id))
        API.postUnfollow($id).then(data => {
            if(data.resultCode === 0) {
                dispatch(unfollow($id));
                dispatch(toggleIsFollowingInProgress(false, $id));
            }
        })
    }
}
