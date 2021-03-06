import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import Header from './Header'
import { logout } from '../../redux/auth/actions'

class HeaderContainer extends React.Component {
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
        logout
    })
)(HeaderContainer)
