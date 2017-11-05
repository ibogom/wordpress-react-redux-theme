import React from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { isLoadingComplete } from '../../reducers';

import './app.scss';

/** COMPONENTS **/
import {Preloader} from '../../components';

class App extends React.Component {

    static contextTypes = {
        store: React.PropTypes.object
    };

    render() {
        return (<div className="app-wrapper">
                { this.props.loaded ? this.props.children : <Preloader/> }
             </div>)
    }
};

function mapStateToProps (state) {
    return {
        menu: state.API.menu,
        pages: state.API.pages,
        posts: state.API.posts,
        loaded: isLoadingComplete(state)
    }
}

App = connect(mapStateToProps)(App);

export default withRouter(App);