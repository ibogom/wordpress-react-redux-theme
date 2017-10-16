import { combineReducers } from 'redux';

import menus from './menus';
import pages from './pages';
import posts from './posts';

const API = combineReducers({
    menus,
    pages,
    posts
});

export default API;