import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './App/Root';
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom';
import store from './App/Redux/store';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
    <Provider store={store}>
        <BrowserRouter>
                <Root />
        </BrowserRouter>
    </Provider>
), document.getElementById('root'));
registerServiceWorker();
