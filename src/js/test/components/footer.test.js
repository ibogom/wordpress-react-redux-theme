import React from 'react';
import renderer from 'react-test-renderer';

import { Footer } from "../../components";

describe('Footer component Test', () => {
    it('Should be rendered with default properties', () => {
        const component = renderer.create(<Footer/>).toJSON();
        expect(component).toMatchSnapshot();
    });
});