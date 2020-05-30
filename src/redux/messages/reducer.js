const NEW_MESSAGE_DIALOG = 'NEW-MESSAGE-DIALOG';
const NEW_MESSAGE_DIALOG_ADD = 'NEW-MESSAGE-DIALOG-ADD';

const initialState = {
    messageTextTextarea: '',
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
        case NEW_MESSAGE_DIALOG:
            return {
                ...state,
                messageTextTextarea: action.value
            }
        case NEW_MESSAGE_DIALOG_ADD:
            const text = state.messageTextTextarea;
            const lengthPosts = state.dialogs.length;
            const createID = state.dialogs[lengthPosts - 1].id + 1;
            const dialog = {
                id: createID,
                name: 'Viktor',
                picture: 'https://www.freepnglogos.com/uploads/smile-png/smile-index-images-24.png',
                message: text,
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

export const dialogChangeForm = (value) => ({ type: NEW_MESSAGE_DIALOG, value: value })
export const dialogAddMessage = () => ({ type: NEW_MESSAGE_DIALOG_ADD })

export default messagesReducer;
