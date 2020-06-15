import { connect } from 'react-redux'
import { compose } from 'redux'
import withAuthRedirect from '../../hoc/withAuthRedirect'
import { sendMessage } from '../../redux/messages/reducer'
import Messages from './Messages'

const mapStateToProps = (state) => {
    return {
        state: state.messagesReducer
    }
}

export default compose(
    connect(mapStateToProps, { sendMessage }),
    withAuthRedirect
)(Messages)
