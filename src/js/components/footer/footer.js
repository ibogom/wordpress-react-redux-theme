import React from 'react';
import PropTypes from 'prop-types';

import { footer, one, two, three, four } from './footer.scss';
export default class Footer extends React.Component {

    static propTypes = {

    };

    static defaultProps = {};

    constructor(props){
        super(props);
    }

    render(){
        return(<div className={footer}>
            <div className={one}></div>
            <div className={two}></div>
            <div className={three}></div>
            <div className={four}></div>
        </div>)
    }
};