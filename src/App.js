import React from 'react';
// Components
import Routes from './routes';
// Config
import API_KEY from './config';
import { Provider } from './store';

export default (
    <Provider value={API_KEY}>
        <Routes/>
    </Provider>
)