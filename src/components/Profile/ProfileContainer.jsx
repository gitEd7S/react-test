import {connect} from 'react-redux';
import {newPostAction, textAction} from '../../redux/profile/reducer'
import Profile from './Profile';

const mapStateToProps = (state) => {
    return {
        data: state.profileReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            dispatch(textAction(text))
        },
        addNewPost: () => {
            dispatch(newPostAction());
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
