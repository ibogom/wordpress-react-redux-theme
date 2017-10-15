import React from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { appWrapper } from './app.scss';

/** COMPONENTS **/
import { Header, Footer } from '../../components';

/** PAGES NAVIGATION **/
import Pages from '../../pages';

/** ACTIONS **/
import { ApiActions } from '../../actions';

class App extends React.Component {

    constructor(props){
        super(props);

    }

    static contextTypes = {
        store: React.PropTypes.object
    };

    componentDidMount(){
        this.props.dispatch(ApiActions.getPages());
    }

    render() {
        const pages = this.props.pages && this.props.pages.data.map(page => {
            return {
                title: page.title.rendered,
                url : page.slug
            };
        });
        return (<div className={appWrapper}>
                    <Header route={this.props.route} pages={pages} />
                    <Pages posts={this.props.posts} pages={pages} />
                    <Footer/>
                </div>)
    }
};

function mapStateToProps (state) {
    return {
        route: state.routes.route,
        posts: state.api.posts,
        pages: state.api.pages
    }
}

App = connect(mapStateToProps)(App);

export default withRouter(App);