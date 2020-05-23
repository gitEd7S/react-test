import React from 'react';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ReactDOM from 'react-dom';

import './index.css';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
