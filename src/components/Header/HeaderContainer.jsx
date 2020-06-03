import React from 'react';
import {connect} from 'react-redux';
import * as axios from 'axios';
import Header from './Header';
import { setUserData } from '../../redux/auth/reducer';

class HeaderContainer extends React.Component {

    componentDidMount() {
        axios
        .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true,
        })
        .then(response => {
            if(response.data.resultCode === 0) {
                this.props.setUserData(response.data.data)
            }
        })
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
    setUserData
})(HeaderContainer);