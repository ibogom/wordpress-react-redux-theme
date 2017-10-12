import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter as Router } from 'react-router-dom';

import {route, pagesList} from '../__mocks__/headerMock';
import { Header } from "../../components";


describe('Header component Test', () => {
    it('Should be rendered with default properties', () => {
        const component = renderer.create(<Router><Header
            pages={pagesList}
            route={route.defaultRoute}
        /></Router>).toJSON();
        expect(component).toMatchSnapshot();
    });
});