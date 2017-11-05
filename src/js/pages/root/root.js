import React from 'react';
import { connect } from 'react-redux';
import { RouteActions } from '../../actions';
import {Link} from 'react-router-dom';

import './root.scss';

class Root extends React.Component {

    componentDidMount(){
        this.props.dispatch(RouteActions.setRoute('home'));
    }

    render() {
        return (<div className="root">
                    <h1 className="title">ПРИВЕТ СОСЕД</h1>
                    <p className="slogan">Вы выбираете дизайн, передаете ключи — и въезжаете в готовую квартиру точно в срок.</p>
                    <p className="slogan"> Мы гарантируем цену и продолжительность ремонта, указанные на сайте.</p>
                    <Link to='/calculator'
                          onClick={this.props.onClick}
                          className="btn-scs">
                        РАСЧИТАТЬ
                    </Link>
            </div>
            )
    }
};

Root = connect()(Root);

export default Root;
