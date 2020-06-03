import React from 'react';
import {connect} from 'react-redux';
import Header from './Header';
import { setUserData } from '../../redux/auth/reducer';
import { getAuth } from '../../api/api';

class HeaderContainer extends React.Component {

    componentDidMount() {
        getAuth().then(data => {
            if(data.resultCode === 0) {
                this.props.setUserData(data.data)
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
