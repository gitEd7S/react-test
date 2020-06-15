import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import withAuthRedirect from '../../hoc/withAuthRedirect'
import {
    addNewPost,
    getUserTunkCreator,
    getStatusTunkCreator,
    updateStatusTunkCreator,
} from '../../redux/profile/reducer'
import Profile from './Profile'

class ProfileContainer extends React.Component {
    componentDidMount() {
        let id = this.props.match.params.id
        if(!id) { id = 8486 }
        this.props.getUserTunkCreator(id)
        this.props.getStatus(id)
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
        getUserTunkCreator,
        getStatus: getStatusTunkCreator,
        updateStatus: updateStatusTunkCreator,
    }),
    withRouter,
    withAuthRedirect,
)(ProfileContainer)
