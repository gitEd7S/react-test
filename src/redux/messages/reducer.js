const NEW_MESSAGE_DIALOG_ADD = 'NEW-MESSAGE-DIALOG-ADD';

const initialState = {
    dialogs: [
        {
            id: 1,
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
}

const messagesReducer = (state = initialState, action) => {
    switch(action.type) {
        case NEW_MESSAGE_DIALOG_ADD:
            const lengthPosts = state.dialogs.length;
            const createID = state.dialogs[lengthPosts - 1].id + 1;
            const dialog = {
                id: createID,
                name: 'Viktor',
                picture: 'https://www.freepnglogos.com/uploads/smile-png/smile-index-images-24.png',
                message: action.text,
            }
            return {
                ...state,
                messageTextTextarea: '',
                dialogs: [...state.dialogs, dialog]
            }
        default:
            return state;
    }
}

export const sendMessage = (payload) => ({ type: NEW_MESSAGE_DIALOG_ADD, text: payload })

export default messagesReducer;
