import React from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { appWrapper } from './app.scss';

/** COMPONENTS **/
import { Header, Footer } from '../../components';

/** PAGES NAVIGATION **/
import Pages from '../../pages';

class App extends React.Component {

    static contextTypes = {
        store: React.PropTypes.object
    };

    render() {
        return (<div className={appWrapper}>
                    <Header {...this.props} />
                    <Pages {...this.props} />
                    <Footer/>
                </div>)
    }
};

/*TODO add selectors for routes and pages to the utils file */

function mapStateToProps (state) {
    return {
        route: state.routes.route,
        posts: state.API.posts,
        pages: state.API.pages,
        menus: state.API.menus
    }
}

App = connect(mapStateToProps)(App);

export default withRouter(App);