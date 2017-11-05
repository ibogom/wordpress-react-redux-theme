import React from "react";
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
/** COMPONENTS **/
import Pages from '../../pages';

const mapStateToProps = (state, ownProps) => ({
    menuItems: state.API.menuItems,
    pages: state.API.pages,
    posts: state.API.posts,
});

const PagesContainer = connect(mapStateToProps)(Pages);

export default withRouter(PagesContainer);