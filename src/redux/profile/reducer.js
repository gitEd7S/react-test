import { API } from "../../api/api"

const CREATE_POST = 'CREATE-POST'
const SET_USER_PROFILE = 'SET-USER-PROFILE'
const GET_STATUS = 'GET-STATUS'

const initialState = {
    status: 'Привет !',
    userPicture: 'https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/body-image/public/1-corvette-stingray-c8-2019-fd-hr-hero-front_0.jpg?itok=SEYe_vLy',
    posts: [
        {
            id: 1,
            message: 'Hey, why nobody love me ?',
            countLike: 3,
        },
        {
            id: 2,
            message: 'Hey!',
            countLike: 6,
        },
        {
            id: 3,
            message: 'Hey! 2',
            countLike: 1,
        },
    ],
    userProfile: {
        contacts: {},
        photos: {},
    }
}

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case CREATE_POST:
            const lengthPosts = state.posts.length
            const createID = state.posts[lengthPosts - 1].id + 1
            const newPost = {
                id: createID,
                message: action.text,
                countLike: 0,
            }
            return {
                ...state,
                messageTextarea: '',
                posts: [...state.posts, newPost]
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                userProfile: action.profile
            }
        case GET_STATUS:
            return {
                ...state,
                status: action.status
            }
        default:
            return state
    }
}

export const addNewPost = (payload) => ({ type: CREATE_POST, text: payload })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const getStatusAction = (status) => ({ type: GET_STATUS, status })

export const getUserTunkCreator = ($id) => {
    return (dispatch) => {
        if(!$id) { $id = 2 }
        API.getUserProfile($id).then(response => { dispatch(setUserProfile(response)) })
    }
}

export const getStatusTunkCreator = ($id) => {
    return (dispatch) => API.getStatus($id).then(response => {
        if(!response) { response = 'Нету статуса' }
        dispatch(getStatusAction(response))
    })
}

export const updateStatusTunkCreator = (status) => {
    return (dispatch) => API.updateStatus(status).then(response => {
        if(response.resultCode === 0) {
            dispatch(getStatusAction(status))
        }
    })
}

export default profileReducer
