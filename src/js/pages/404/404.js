import React from 'react'
import { connect } from 'react-redux';
import { RouteActions } from '../../actions';

import './404.scss';

class NotFound extends React.Component {

    constructor(props){
        super(props);

        this.navigateBack = this.navigateBack.bind(this);
    }

    componentDidMount(){
        this.props.dispatch(RouteActions.setRoute('not found'));
    }

    navigateBack(e){
        e.preventDefault();
        window.history.back();
    }

    render() {
        return (<div className="page not-found">
            <h1>Ooops! Page that you are looking for not found!</h1>
            <a href="#" className="link link-not-found" onClick={this.navigateBack}> Вернуться назад </a>
            </div>)
    }
};

NotFound = connect()(NotFound);

export default NotFound;