import { combineReducers } from 'redux';
import routes from './routes';
import API from './api/';

const AppReducers = combineReducers({
    routes,
    API
});

export default AppReducers