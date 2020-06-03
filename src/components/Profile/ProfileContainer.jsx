import React from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {addNewPost, updateNewPostText, setUserProfile} from '../../redux/profile/reducer'
import Profile from './Profile';
import { API } from '../../api/api';

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userID = this.props.match.params.id;
        if(!userID) { userID = 2; }

        API.getUserProfile(userID).then(data => { this.props.setUserProfile(data) })
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
    setUserProfile,
})(WithUrlDataContainerComponent);
