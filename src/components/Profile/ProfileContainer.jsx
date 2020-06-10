import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import withAuthRedirect from '../../hoc/withAuthRedirect'
import { addNewPost, updateNewPostText, getUserTunkCreator } from '../../redux/profile/reducer'
import Profile from './Profile'

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

export default compose(
    connect(mapStateToProps, {
        addNewPost,
        updateNewPostText,
        getUserTunkCreator,
    }),
    withRouter,
    withAuthRedirect,
)(ProfileContainer)