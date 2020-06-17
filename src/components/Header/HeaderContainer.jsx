import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import Header from './Header'
import { getAuthThunkCreator, logout } from '../../redux/auth/actions'

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getAuthThunkCreator()
    }
    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.authReducer.isAuth,
        login: state.authReducer.login,
    }
}

export default compose(
    connect(mapStateToProps, {
        getAuthThunkCreator,
        logout
    })
)(HeaderContainer)
