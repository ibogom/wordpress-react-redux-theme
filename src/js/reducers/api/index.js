import { combineReducers } from 'redux';

import menus from './menus';
import menuItems from './menuItems';
import pages from './pages';
import posts from './posts';

const API = combineReducers({
    menus,
    menuItems,
    pages,
    posts
});

export default API;