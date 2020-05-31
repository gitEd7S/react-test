import {connect} from 'react-redux';
import { sendMessage, changeMessage } from '../../redux/messages/reducer';
import Messages from './Messages';

const mapStateToProps = (state) => {
    return {
        state: state.messagesReducer
    }
}

export default connect(mapStateToProps, {
    sendMessage,
    changeMessage,
})(Messages);
