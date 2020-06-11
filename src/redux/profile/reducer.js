import { API } from "../../api/api";

const CREATE_POST = 'CREATE-POST';
const CHANGE_POST_FORM = 'CHANGE-POST-FORM';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

const initialState = {
    messageTextarea: '',
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
        case CHANGE_POST_FORM:
            return {
                ...state,
                messageTextarea: action.value
            }
            case CREATE_POST:
            const lengthPosts = state.posts.length;
            const createID = state.posts[lengthPosts - 1].id + 1;
            const newPost = {
                id: createID,
                message: state.messageTextarea,
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
        default:
            return state;
    }
}

export const addNewPost = () => ({ type: CREATE_POST })
export const updateNewPostText = (value) => ({ type: CHANGE_POST_FORM, value })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })

export const getUserTunkCreator = ($id) => {
    return (dispatch) => {
        if(!$id) { $id = 2; }
        API.getUserProfile($id).then(data => { dispatch(setUserProfile(data)) })
    }
}

export default profileReducer;
