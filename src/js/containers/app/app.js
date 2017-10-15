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

    constructor(props){
        super(props);

    }

    static contextTypes = {
        store: React.PropTypes.object
    };

    render() {
        return (<div className={appWrapper}>
                    <Header route={this.props.route} pages={PagesList} />
                    <Pages posts={this.props.posts} />
                    <Footer/>
                </div>)
    }
};

function mapStateToProps (state) {
    return {
        route: state.routes.route,
        posts: state.api.posts
    }
}

App = connect(mapStateToProps)(App);

export default withRouter(App);