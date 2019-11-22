import React from 'react';
import './App.scss';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Route, Switch, BrowserRouter } from 'react-router-dom';
import Mobile from './Mobile';

ReactDOM.render((
    <BrowserRouter>
    <div>
    <Switch>
    <Route exact path='/' component={App}/>
    <Route exact path='/mobile' component={Mobile}/>
    </Switch>
    </div>
    </BrowserRouter>
), document.getElementById('root'));
