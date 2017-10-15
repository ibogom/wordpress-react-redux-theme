import React from 'react'
import {Switch, Route} from 'react-router-dom';

/** ROUTES **/
import NotFound from './404/404';
import PageHandler from './pageHandler/pageHandler';

import { main } from './pages.scss';
import pageList from './pages';

export default class Pages extends React.Component {
    render() {
        return (<main className={main}>
            <Switch>
                <Route path='*' render={props=> <PageHandler posts={this.props.posts} {...props} />}/>
            </Switch>
            { this.props.children }
        </main>)
    }
};
