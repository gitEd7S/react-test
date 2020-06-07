import React from 'react';
import {connect} from 'react-redux';
import Header from './Header';
import { getAuthThunkCreator } from '../../redux/auth/reducer';

class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.getAuthThunkCreator();
    }

    render () {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.authReducer.isAuth,
        login: state.authReducer.login,
    }
}

export default connect(mapStateToProps, {
    getAuthThunkCreator
})(HeaderContainer);
