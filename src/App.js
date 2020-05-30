import React from 'react';
import {Route} from 'react-router-dom';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import ProfileContainer from './components/Profile/ProfileContainer';
import MessagesContainer from './components/Messages/MessagesContainer';
import FindUsersContainer from './components/FindUsers/FindUsersContainer';

const App = (props) => {
    return (
        <div className="wrapper">
            <Header />
            <Navbar />
            <div className="main">
                <Route
                    exact
                    path="/profile"
                    render={ () => <ProfileContainer /> }
                />
                <Route
                    path="/messages"
                    render={ () => <MessagesContainer /> }
                />
                <Route
                    path="/users"
                    render={ () => <FindUsersContainer /> }
                />
                <Route exact path="/news" component={News} />
                <Route exact path="/music" component={Music} />
                <Route exact path="/settings" component={Settings} />
            </div>
        </div>
    );
}

export default App;
