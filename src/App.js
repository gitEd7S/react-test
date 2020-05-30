import React from 'react';
import {Route} from 'react-router-dom';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import ProfileContainer from './components/Profile/ProfileContainer';
import MessagesContainer from './components/Messages/MessagesContainer';
import UsersContainer from './components/FindUsers/UsersContainer';

const App = (props) => {
    return (
        <div className="wrapper">
            <Header />
            <Navbar />
            <div className="main">
                <Route
                    exact
                    path="/"
                    render={ () => <ProfileContainer /> }
                />
                <Route
                    path="/messages"
                    render={ () => <MessagesContainer /> }
                />
                <Route
                    path="/users"
                    render={ () => <UsersContainer /> }
                />
                <Route exact path="/news" component={News} />
                <Route exact path="/music" component={Music} />
                <Route exact path="/settings" component={Settings} />
            </div>
        </div>
    );
}

export default App;
