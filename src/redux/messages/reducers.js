const NEW_MESSAGE_DIALOG = 'NEW-MESSAGE-DIALOG';
const NEW_MESSAGE_DIALOG_ADD = 'NEW-MESSAGE-DIALOG-ADD';

const initialState = {
    messageTextTextarea: '',
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
}

const messagesReducer = (state = initialState, action) => {

    switch(action.type) {
        case NEW_MESSAGE_DIALOG:
            state.messageTextTextarea = action.value;
            return state;
        case NEW_MESSAGE_DIALOG_ADD:
            const body = state.messageTextTextarea;
            state.messageTextTextarea = '';
            state.dialogs.push({
                name: 'Viktor',
                picture: 'https://www.freepnglogos.com/uploads/smile-png/smile-index-images-24.png',
                message: body,
            });
            return state;
        default:
            return state;
    }
}

export const dialogAddMessage = () => ({ type: NEW_MESSAGE_DIALOG_ADD })
export const dialogChangeForm = (value) => ({ type: NEW_MESSAGE_DIALOG, value: value })

export default messagesReducer;
