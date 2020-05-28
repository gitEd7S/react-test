import profileReducer from "./profile/reducers";
import messagesReducer from "./messages/reducers";

const store = {
    _subscribe() {
        console.log('Render');
    },
    _state: {
        profilePage: {
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
        },
        messagesPage: {
            dialogs: [
                {
                    name: 'Andrew',
                    picture: 'https://www.freepnglogos.com/uploads/smile-png/smile-index-images-24.png',
                    message: 'I am a normal popover and I can have text and everything.',
                },
            ],
            listuser: [
                { id: 1, name: 'Andrew', online: true },
                { id: 2, name: 'Dmitry', },
                { id: 3, name: 'Viktor' },
            ],
            messageTextTextarea: '',
        }
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._subscribe = observer;
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);

        this._state.messagesPage =  messagesReducer(this._state.messagesPage, action);

        this._subscribe(this._state)
    }
}

export default store;
