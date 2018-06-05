//Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'

//Routes
import AppRoutes from './routes'

//Assets  
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import "github-fork-ribbon-css/gh-fork-ribbon.css";

ReactDOM.render(
    <BrowserRouter>
        <AppRoutes />
    </BrowserRouter>,
     document.getElementById('root'));
registerServiceWorker();

