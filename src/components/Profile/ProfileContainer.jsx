import React from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {addNewPost, updateNewPostText, setUserProfile} from '../../redux/profile/reducer'
import Profile from './Profile';
import * as axios from 'axios';

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userID = this.props.match.params.id;
        if(!userID) { userID = 2; }
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/profile/${userID}`)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
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
