const CREATE_POST = 'CREATE-POST';
const CHANGE_POST_FORM = 'CHANGE-POST-FORM';

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
    ]
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
        default:
            return state;
    }
}

export const newPostAction = () => ({ type: CREATE_POST })
export const textAction = (value) => ({ type: CHANGE_POST_FORM, value: value })

export default profileReducer;
