const FOLLOW_ACTION = 'FOLLOW-ACTION-TYPE';
const UNFOLLOW_ACTION = 'UNFOLLOW-ACTION-TYPE';
const SET_USERS_ACTION = 'SET-USERS-ACTION';

// if(!props.users.length) {
//     props.setUsers([
//         {
//             id: 1,
//             name: 'Dima',
//             picture: 'https://lh3.googleusercontent.com/proxy/G_Ze6t3DN4ioVxxGTcezpa7Hr1L6ynCMRCNv4uOtQ60wPIYbVC9XnzvMax34MUEwvCOaCSMRvnD3uStax7w10lJmjTQeqxk9XILKy7s5cqKBx8UqUxQ',
//             status: 'I am a boss',
//             followed: false,
//             location: {
//                 country: 'Belarus',
//                 city: 'Minsk',
//             },
//         },
//         {
//             id: 2,
//             name: 'Ed',
//             picture: 'https://lh3.googleusercontent.com/proxy/G_Ze6t3DN4ioVxxGTcezpa7Hr1L6ynCMRCNv4uOtQ60wPIYbVC9XnzvMax34MUEwvCOaCSMRvnD3uStax7w10lJmjTQeqxk9XILKy7s5cqKBx8UqUxQ',
//             status: 'I am a boss',
//             followed: true,
//             location: {
//                 country: 'Ukraine',
//                 city: 'Lutsk',
//             },
//         },
//         {
//             id: 3,
//             name: 'Sam',
//             picture: 'https://lh3.googleusercontent.com/proxy/G_Ze6t3DN4ioVxxGTcezpa7Hr1L6ynCMRCNv4uOtQ60wPIYbVC9XnzvMax34MUEwvCOaCSMRvnD3uStax7w10lJmjTQeqxk9XILKy7s5cqKBx8UqUxQ',
//             status: 'I am a boss',
//             followed: false,
//             location: {
//                 country: 'USA',
//                 city: 'New-York',
//             },
//         },
//     ])
// }

const initialState = { users: [ ] }

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
                users: [...state.users, ...action.users]
            }

        default:
            return state
    }
}

export const followActionCreator = (userId) => ({ type: FOLLOW_ACTION, userId })
export const unfollowActionCreator = (userId) => ({ type: UNFOLLOW_ACTION, userId })
export const setUsersActionCreator = (users) => ({ type: SET_USERS_ACTION, users })

export default usersReducer;
