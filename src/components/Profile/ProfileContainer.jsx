import React from 'react';
import {connect} from 'react-redux';
import {addNewPost, updateNewPostText, setUserProfile} from '../../redux/profile/reducer'
import Profile from './Profile';
import * as axios from 'axios';

class ProfileContainer extends React.Component {

    componentDidMount() {
        axios
        .get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
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

export default connect(mapStateToProps, {
    addNewPost,
    updateNewPostText,
    setUserProfile,
})(ProfileContainer);
