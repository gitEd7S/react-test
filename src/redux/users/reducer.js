const FOLLOW_ACTION = 'FOLLOW-ACTION-TYPE';
const UNFOLLOW_ACTION = 'UNFOLLOW-ACTION-TYPE';
const SET_USERS_ACTION = 'SET-USERS-ACTION';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_COUNT = 'SET-TOTAL-COUNT';

const initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
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

        default:
            return state
    }
}

export const followActionCreator = (userId) => ({ type: FOLLOW_ACTION, userId })
export const unfollowActionCreator = (userId) => ({ type: UNFOLLOW_ACTION, userId })
export const setUsersActionCreator = (users) => ({ type: SET_USERS_ACTION, users })
export const setCurrentPageActionCreator = (page) => ({ type: SET_CURRENT_PAGE, page })
export const setTotalCountActionCreator = (total) => ({ type: SET_TOTAL_COUNT, total })

export default usersReducer;
