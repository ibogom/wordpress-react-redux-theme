import React from 'react'
import { connect } from 'react-redux';
import {Switch, Route} from 'react-router-dom';

/** ROUTES **/
import NotFound from './404/404';
import PageHandler from './pageHandler/pageHandler';
import Root from "./root/root";

import { main } from './pages.scss';


export default class Pages extends React.Component {

    constructor(props){
        super(props);
        this.getRoutes = this.getRoutes.bind(this);
    }

    getRoutes(page, i){
        return (<Route key={i} path={page.url} render={props => <PageHandler
            posts={this.props.posts}
            pages={this.props.pages} {...props} />}
        />);
    }

    render() {
        const Routes = this.props.pages && this.props.pages.map((page, i ) => this.getRoutes(page, i));

        return (<main className={main}>
            <Switch>
                <Route exact path='/' render={props=> <Root {...props} />}/>
                { Routes }
                <Route render={props => <NotFound {...props} />}/>
            </Switch>
            { this.props.children }
        </main>)
    }
};
