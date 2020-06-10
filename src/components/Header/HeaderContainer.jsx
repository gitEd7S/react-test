import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { getAuthThunkCreator } from '../../redux/auth/reducer'
import Header from './Header'

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
        getAuthThunkCreator
    })
)(HeaderContainer)