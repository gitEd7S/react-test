const FOLLOW_ACTION = 'FOLLOW-ACTION-TYPE';
const UNFOLLOW_ACTION = 'UNFOLLOW-ACTION-TYPE';
const SET_USERS_ACTION = 'SET-USERS-ACTION';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_COUNT = 'SET-TOTAL-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const TOGGLE_IS_FOLLOWING_IN_PROGRESS = 'TOGGLE-IS-FOLLOWING-IN-PROGRESS';

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

        case FOLLOW_ACTION:
            return {
                ...state,
                users: state.users.map(user => {
                    if(user.id === action.userId) {
                        return { ...user, followed: true }
                    }
                    return user;
                })
            }

        case UNFOLLOW_ACTION:
            return {
                ...state,
                users: state.users.map(user => {
                    if(user.id === action.userId) {
                        return { ...user, followed: false }
                    }
                    return user;
                })
            }

        case SET_USERS_ACTION:
            return {
                ...state,
                users: [...action.users]
            }

        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.page,
            }

        case SET_TOTAL_COUNT:
            return {
                ...state,
                totalUsersCount: action.total,
            }

        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.fetching,
            }

        case TOGGLE_IS_FOLLOWING_IN_PROGRESS:
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

export const follow = (userId) => ({ type: FOLLOW_ACTION, userId })
export const unfollow = (userId) => ({ type: UNFOLLOW_ACTION, userId })
export const setUsers = (users) => ({ type: SET_USERS_ACTION, users })
export const setCurrentPage = (page) => ({ type: SET_CURRENT_PAGE, page })
export const totalUsersCountReady = (total) => ({ type: SET_TOTAL_COUNT, total })
export const toggleIsFetching = (fetching) => ({ type: TOGGLE_IS_FETCHING, fetching })
export const toggleIsFollowingInProgress = (audit, id) => ({ type: TOGGLE_IS_FOLLOWING_IN_PROGRESS, audit, id })

export default usersReducer;
