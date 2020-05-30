import {connect} from 'react-redux';
import { dialogAddMessage, dialogChangeForm } from '../../redux/messages/reducer';
import Messages from './Messages';

const mapStateToProps = (state) => {
    return {
        state: state.messagesReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(dialogAddMessage())
        },
        changeMessage: (text) => {
            dispatch(dialogChangeForm(text))
        },
    }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages)

export default MessagesContainer;
