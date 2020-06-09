import {connect} from 'react-redux';
import { sendMessage, changeMessage } from '../../redux/messages/reducer';
import Messages from './Messages';
import withAuthRedirect from '../../hoc/withAuthRedirect';

const mapStateToProps = (state) => {
    return {
        state: state.messagesReducer
    }
}

const authRedirect = withAuthRedirect(Messages)

export default connect(mapStateToProps, {
    sendMessage,
    changeMessage,
})(authRedirect);
