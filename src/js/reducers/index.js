import { combineReducers } from 'redux';
import routes from './routes';
import initial from './initial';
import app from './app';
import API from './api/';

const AppReducers = combineReducers({
    routes,
    initial,
    app,
    API
});

export function isLoadingComplete(state) {
    return state.API.menus.loaded && state.API.pages.loaded && state.API.menuItems.length;
}

export default AppReducers