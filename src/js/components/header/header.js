import React from 'react';
import {header, left, right, middle, section, navigation, inLine, active} from './header.scss';
import {Link} from 'react-router-dom';

export default class Header extends React.Component {

    static propTypes = {
        route: React.PropTypes.string,
        pages: React.PropTypes.object
    };

    static defaultProps = {};

    renderNavigation() {
        const links = Object.keys(this.props.pages).map((name, i) => {
            return <Link key={i} to={this.props.pages[name]}
                         className={inLine + (this.props.route === name ? ' ' + active : '')}>
                {name}
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