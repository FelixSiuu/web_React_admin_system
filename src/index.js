import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom'
// 引入Provider自動為後代組件傳store.js
import store, { persistor }  from './redux/store.js'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react';
import './index.scss';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <App />
            </PersistGate>
        </Provider>
    </BrowserRouter>
);
