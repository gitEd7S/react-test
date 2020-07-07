import React from 'react'
import { Route, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { compose } from 'redux'

import { initializedApp } from './redux/app/actions'

import HeaderContainer from './components/Header/HeaderContainer'
import ProfileContainer from './components/Profile/ProfileContainer'
import MessagesContainer from './components/Messages/MessagesContainer'
import UsersContainer from './components/FindUsers/UsersContainer'

import Navbar from './components/Navbar/Navbar'
import News from './components/News/News'
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'
import Login from './components/Login/Login'
import Preloader from './components/common/Preloader/Preloader'

class App extends React.Component {
    componentDidMount () {
        this.props.initializedApp()
    }
    render () {
        if(!this.props.initialized) { return <Preloader /> }
        else {
            return (
                <div className="wrapper">
                    <HeaderContainer />
                    <Navbar />
                    <div className="main">
                        <Route path="/profile/:id?" render={ () => <ProfileContainer /> } />
                        <Route path="/messages" render={ () => <MessagesContainer /> } />
                        <Route path="/users" render={ () => <UsersContainer /> } />
                        <Route exact path="/news" component={News} />
                        <Route exact path="/music" component={Music} />
                        <Route exact path="/settings" component={Settings} />
                        <Route exact path="/login" component={Login} />
                    </div>
                </div>
            )
        }
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized,
})

export default compose(
    withRouter,
    connect(mapStateToProps, { initializedApp })
)(App)
