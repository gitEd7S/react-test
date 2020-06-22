import React, { Profiler } from 'react'
import { Route, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { compose } from 'redux'

import HeaderContainer from './components/Header/HeaderContainer'
import ProfileContainer from './components/Profile/ProfileContainer'
import MessagesContainer from './components/Messages/MessagesContainer'
import UsersContainer from './components/FindUsers/UsersContainer'

import Navbar from './components/Navbar/Navbar'
import News from './components/News/News'
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'
import Login from './components/Login/Login'
import { getAuthThunkCreator } from './redux/auth/actions'

class App extends React.Component {

    componentDidMount() {
        this.props.getAuthThunkCreator()
    }

    onRenderCallback (id, phase, actualDuration, baseDuration, startTime, commitTime, interactions) {
        console.log('id = ' + id)
        console.log('phase = ' + phase)
        console.log('actualDuration = ' + actualDuration)
        console.log('baseDuration = ' + baseDuration)
        console.log('startTime = ' + startTime)
        console.log('commitTime = ' + commitTime)
        console.log('interactions = ', interactions)
    }

    render () {
        return (
            <div className="wrapper">
                <Profiler id="HeaderContainer" onRender={this.onRenderCallback}>
                    <HeaderContainer />
                </Profiler>
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

export default compose(
    withRouter,
    connect(null, { getAuthThunkCreator })
)(App)
