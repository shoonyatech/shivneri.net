import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from '../src/components/App/App';
import { createBrowserHistory } from "history";
import {BrowserRouter} from 'react-router-dom';
import SignIn from "../src/components/SignIn/SignIn"
import SignOut from "../src/components/SignOut/SignOut"
import * as serviceWorker from './serviceWorker';



ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
    , document.getElementById('root'));

serviceWorker.register();