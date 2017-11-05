import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import './menu.scss';
import { AppActions } from '../../actions';

export default class Menu extends React.Component {

    static propTypes = {
        menuItems: PropTypes.array,
        onClick: PropTypes.func.isRequired
    };

    renderNavigation() {
        return this.props.menuItems.map(menu => {
            return menu.items.map((item, i) => {
                return <Link key={i} to={'/' + decodeURI(item.object_slug)}
                             onClick={this.props.onClick}
                             className={"block" + (this.props.route === decodeURI(item.object_slug) ? " active" : '')}>
                    {item.title}
                </Link>
            });
        });
    }

    render() {
        return (<nav className={this.props.isMenuOpened ? "navigation open" : "navigation"}>
                <span className="close" onClick={this.props.onClick}/>
                <h3 className="title">
                    Hello,
                </h3>
                <p className="welcome-text">
                    Vestibulum commodo volutpat a,
                    convallis ac, laoreet enim.
                    Phasellus fermentum in, dolor.

                    Pellentesque facilisis.
                    Nulla imperdiet sit amet magna.
                </p>
                <div className="social" />
            <Link to='/'
                  onClick={this.props.onClick}
                  className={"block" + (this.props.route === 'home' ? ' active' : '')}>
                Главная
            </Link>
            <Link to='/calculator'
                  onClick={this.props.onClick}
                  className={"block" + (this.props.route === 'calculator' ? ' active' : '')}>
                Калькулятор
            </Link>
            { this.props.menuItems.length !== 0 ? this.renderNavigation() : <p className="loading">Loading...</p> }
            </nav>);
    }
}