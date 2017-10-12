import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {MemoryRouter as Router} from 'react-router-dom';

import {App} from "../../containers";

/** REDUCERS **/
import AppReducers from '../../reducers';

const store = createStore(AppReducers);

describe('App container Test', () => {
    it('Should be rendered with default properties', () => {
        const component = renderer.create(
            <Provider store={store}>
                <Router>
                    <App/>
                </Router>
            </Provider>).toJSON();
        expect(component).toMatchSnapshot();
    });
});