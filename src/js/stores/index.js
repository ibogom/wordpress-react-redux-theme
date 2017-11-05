import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

/** REDUCERS **/
import AppReducers from '../reducers';

const store = compose(applyMiddleware(thunk))(createStore)(AppReducers);


export default store;