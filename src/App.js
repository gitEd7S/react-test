import React from 'react';
import {Route} from 'react-router-dom';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Messages from './components/Messages/Messages';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

const App = (props) => {
    return (
        <div className="wrapper">
            <Header />
            <Navbar />
            <div className="main">
                <Route exact path="/profile" component={Profile} />
                <Route path="/messages" render={ () => <Messages dialogs={props.dialogs} listuser={props.listuser} /> }/>
                <Route exact path="/news" component={News} />
                <Route exact path="/music" component={Music} />
                <Route exact path="/settings" component={Settings} />
            </div>
        </div>
    );
}

export default App;
