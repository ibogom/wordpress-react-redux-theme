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
        const links = this.props.menus && this.props.menus.map(menu => {
           return menu.items.map((item, i) =>{
               return <Link key={i} to={item.object_slug}
                                className={inLine + (this.props.route === decodeURI(item.object_slug) ? ' ' + active : '')}>
                       {item.title}
                   </Link>
           });
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