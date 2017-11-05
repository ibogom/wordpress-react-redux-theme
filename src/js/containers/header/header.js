import React from "react";
import {connect} from 'react-redux';
import { AppActions } from '../../actions';
/** COMPONENTS **/
import {Header} from '../../components';

const mapStateToProps = (state, ownProps) => ({
    route: state.routes.route,
    menus: state.API.menus,
    isMenuOpened: state.app.isMenuOpen
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => {
        dispatch(AppActions.openMenu());
    }
});

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);

export default HeaderContainer;