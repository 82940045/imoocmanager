import React from 'react';
import { HashRouter, Route, Link, Switch } from 'react-router-dom';
import Topic from './Topic';
import Main from './Main';
import About from './About';

export default class Home extends React.Component {

    render() {
        return (
            <HashRouter>
                <div>
                    <ul>
                        <li>
                            <Link to="/main">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/topics">Topics</Link>
                        </li>
                    </ul>
                    <hr />
                    <Switch>
                        <Route exact={true} path="/main" component={Main}></Route>
                        <Route path="/about" component={About}></Route>
                        <Route path="/topics" component={Topic}></Route>
                    </Switch>
                </div>
            </HashRouter>
        );
    }
}