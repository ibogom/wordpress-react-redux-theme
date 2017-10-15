import { combineReducers } from 'redux';
import routes from './routes';
import api from './api';

const AppReducers = combineReducers({
    routes,
    api
});

export default AppReducers