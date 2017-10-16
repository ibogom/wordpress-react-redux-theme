import React from 'react'
import { connect } from 'react-redux';
import { RouteActions } from '../../actions';

class NotFound extends React.Component {

    componentDidMount(){
        this.props.dispatch(RouteActions.setRoute('not found'));
    }

    render() {
        return (<h1>Ooops! Page that you are looking for not found!</h1>)
    }
};

NotFound = connect()(NotFound);

export default NotFound;