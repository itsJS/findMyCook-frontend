"use strict";

import React from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import {SearchChefView} from "./views/SearchChefView/SearchChefView";

export default class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            title: 'FindMyCook',
            routes: [
                 {component: SearchChefView, path: '/', exact: true}
            ]
        };
    }

    componentDidMount(){
        document.title = this.state.title;
    }

    render() {
        return(
            <div>
                <Router>
                    <Switch>
                        {this.state.routes.map((route, i) => (<Route key={i} {...route}/>) )}
                    </Switch>
                </Router>
            </div>
        );
    }
}

