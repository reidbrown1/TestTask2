import React from 'react';
import ReactDom from 'react-dom';
import {Router, Switch, Route} from 'react-router-dom';
import { createBrowserHistory } from "history";
import App from './components/App';
import './index.css';

import Dispatcher from './components/dispatcher/Dispatcher';
import Header from './components/Header';

//ReactDom.render(<App/>, document.getElementById('root'));

ReactDom.render(
    <Router history={createBrowserHistory()}>
        <Switch>
            <Route exact path='/' render={() => <Header><App/></Header>}></Route>
            
            <Route path='/dispatcher' render={() => <Header><Dispatcher/></Header>}></Route>
        </Switch>
    </Router>,
    document.getElementById('root')
);
