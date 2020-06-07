import React from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {addNewPost, updateNewPostText, getUserTunkCreator} from '../../redux/profile/reducer'
import Profile from './Profile';

class ProfileContainer extends React.Component {

    componentDidMount() {
       this.props.getUserTunkCreator(this.props.match.params.id)
    }

    render() {
        return (
            <Profile {...this.props} />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.profileReducer,
    }
}

const WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {
    addNewPost,
    updateNewPostText,
    getUserTunkCreator,
})(WithUrlDataContainerComponent);
