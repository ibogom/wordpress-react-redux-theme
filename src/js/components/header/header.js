import React from 'react';
import {header, left, right, middle, section, navigation, inLine, active} from './header.scss';
import {Link} from 'react-router-dom';

export default class Header extends React.Component {

    static propTypes = {
        route: React.PropTypes.string,
        routes: React.PropTypes.array
    };

    static defaultProps = {};

    renderNavigation() {
        const links = this.props.routes && this.props.routes.map((route, i) => {
            return <Link key={i} to={route.url}
                         className={inLine + (this.props.route === route.title ? ' ' + active : '')}>
                {route.title}
            </Link>
        });
        return (<nav className={navigation}>
            {links}
        </nav>)
    }

    render() {
        return (<header className={header}>
            <div className={section}>
                <div className={left}>

                </div>
                <div className={middle}>
                    {this.props.route}
                </div>
                <div className={right}>

                </div>
            </div>
            <div className={section}>
                {this.renderNavigation()}
            </div>
        </header>)
    }
};