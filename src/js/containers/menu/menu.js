import React from "react";
import {connect} from 'react-redux';
import { AppActions } from '../../actions';

/** COMPONENTS **/
import {Menu} from '../../components';

const mapStateToProps = (state, ownProps) => ({
    route: state.routes.route,
    menuItems: state.API.menuItems,
    isMenuOpened: state.app.isMenuOpen
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => {
        dispatch(AppActions.closeMenu());
    }
});

const MenuContainer = connect(mapStateToProps, mapDispatchToProps)(Menu);

export default MenuContainer;