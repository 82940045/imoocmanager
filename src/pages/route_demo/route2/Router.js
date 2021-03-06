import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import Topic from './Topic';
import Main from './Main';
import About from './About';

import Home from './Home'

export default class IRouter extends React.Component {

    render() {
        return (
            <Router>
                <Home>
                    <Route path="/main" render={() => (
                        <Main>
                            <div>
                                <Route path="/main/a" component={About}></Route>
                            </div>
                        </Main>
                    )}></Route>
                    <Route exact={true} path="/about" component={About}></Route>
                    <Route path="/topics" component={Topic}></Route>
                </Home>
            </Router>
        );
    }
}