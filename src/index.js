import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

import App from './App';

import * as serviceWorker from './serviceWorker';

import './index.css';

let dialogs = [
    {
        name: 'Andrew',
        picture: 'https://www.freepnglogos.com/uploads/smile-png/smile-index-images-24.png',
        message: 'I am a normal popover and I can have text and everything.',
    },
    {
        name: 'Dmitry',
        picture: 'https://www.freepnglogos.com/uploads/smile-png/smile-index-images-24.png',
        message: 'I am a normal popover and I can have text and everything.',
    },
    {
        name: 'Viktor',
        picture: 'https://www.freepnglogos.com/uploads/smile-png/smile-index-images-24.png',
        message: 'I am a normal popover and I can have text and everything. I am a normal popover and I can have text and everything.',
    },
];

let listUser = [
    { id: 1, name: 'Andrew', online: true },
    { id: 2, name: 'Dmitry', },
    { id: 3, name: 'Viktor' },
]

ReactDOM.render(
    <BrowserRouter>
        <App
            dialogs={dialogs}
            listuser={listUser}
        />
    </BrowserRouter>,
    document.getElementById('root')
);

serviceWorker.unregister();
