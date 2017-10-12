/** REACT COMPONENTS **/
import React from 'react';
import {render} from 'react-dom'
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';

/** CONTAINERS **/
import {App} from './containers';

/** STORES **/
import store from './stores';

/** THEMES **/
import '../assets/themes/default/main.scss';

render(<Provider store={store}>
    <Router>
        <App/>
    </Router>
</Provider>, document.getElementById('app'));