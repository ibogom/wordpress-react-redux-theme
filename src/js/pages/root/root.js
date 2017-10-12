import React from 'react';
import { connect } from 'react-redux';
import { RouteActions } from '../../actions';

class Root extends React.Component {

    componentDidMount(){
        this.props.dispatch(RouteActions.setRoute('root'));
    }

    render() {
        return (<h1> Welcome to the Boilerplate Website! </h1>)
    }
};

Root = connect()(Root);

export default Root;
