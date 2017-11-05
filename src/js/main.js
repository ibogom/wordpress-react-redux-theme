/** REACT COMPONENTS **/
import React from 'react';
import {render} from 'react-dom'
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';

/** CONTAINERS **/
import {App, HeaderContainer, MenuContainer, FooterContainer, PagesContainer} from './containers';

/** STORES **/
import store from './stores';

/** THEMES **/
import '../assets/themes/default/main.scss';

/** ACTIONS **/
import {InitialAction} from './actions';

store.dispatch(InitialAction.initialRequest());

render(<Provider store={store}>
    <Router>
        <App>
            <MenuContainer/>
            <HeaderContainer/>
            <PagesContainer/>
            <FooterContainer/>
        </App>
    </Router>
</Provider>, document.getElementById('app'));