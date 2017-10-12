import React from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { appWrapper } from './app.scss';

/** COMPONENTS **/
import { Header, Footer } from '../../components';

/** PAGES NAVIGATION **/
import Pages from '../../pages';
import PagesList from '../../pages/pages';

class App extends React.Component {

    static contextTypes = {
        store: React.PropTypes.object
    };

    render() {
        const state = this.context.store.getState();
        const route = state.routes && state.routes.route ? state.routes.route : '';

        return (<div className={appWrapper}>
                    <Header route={route} pages={PagesList} />
                    <Pages/>
                    <Footer/>
                </div>)
    }
};

function mapStateToProps (state) {
    return {
        route: state.routes.route
    }
}

App = connect(mapStateToProps)(App);

export default withRouter(App);