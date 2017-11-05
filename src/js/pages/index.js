import React from 'react'
import { connect } from 'react-redux';
import {Switch, Route} from 'react-router-dom';

/** ROUTES **/
import NotFound from './404/404';
import PageHandler from './pageHandler/pageHandler';
import Root from "./root/root";


export default class Pages extends React.Component {

    constructor(props){
        super(props);
        this.getRoutes = this.getRoutes.bind(this);
        this.getPageRoute = this.getPageRoute.bind(this);
    }

    getRoutes(menu){
        return menu.items.map((page, i) => this.getPageRoute(page, i));
    }

    getPageRoute(page, i){
        return <Route key={i} path={'/'+decodeURI(page.object_slug)} render={ props =>
                <PageHandler
                    pages={this.props.pages}
                    posts={this.props.posts}
                    route={decodeURI(page.object_slug)} {...props}/>
                }
            />;
    }

    render() {
        const Routes = this.props.menuItems.map((menu, i ) => this.getRoutes(menu, i));
        return (<main className="main">
            <Switch>
                <Route exact path='/' render={props=> <Root {...props} />}/>
                { Routes }
                <Route render={props => <NotFound {...props} />}/>
            </Switch>
            { this.props.children }
        </main>)
    }
};
