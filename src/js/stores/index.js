import {createStore} from 'redux';

/** REDUCERS **/
import AppReducers from '../reducers';

const store = createStore(AppReducers);

export default store;