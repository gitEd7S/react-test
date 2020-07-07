import * as types from './types'

const initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    isFollowingInProgress: [],
}

const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.FOLLOW_ACTION:
            return {
                ...state,
                users: state.users.map(user => {
                    if(user.id === action.userId) {
                        return { ...user, followed: true }
                    }
                    return user;
                })
            }
        case types.UNFOLLOW_ACTION:
            return {
                ...state,
                users: state.users.map(user => {
                    if(user.id === action.userId) {
                        return { ...user, followed: false }
                    }
                    return user;
                })
            }
        case types.SET_USERS_ACTION:
            return {
                ...state,
                users: [...action.users]
            }
        case types.SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.page,
            }
        case types.SET_TOTAL_COUNT:
            return {
                ...state,
                totalUsersCount: action.total,
            }
        case types.TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.fetching,
            }
        case types.TOGGLE_IS_FOLLOWING_IN_PROGRESS:
            return {
                ...state,
                isFollowingInProgress: action.audit
                    ? [...state.isFollowingInProgress, action.id]
                    : state.isFollowingInProgress.filter(id => id !== action.id),
            }
        default:
            return state
    }
}

export default usersReducer;
