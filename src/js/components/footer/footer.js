import React from 'react';
import PropTypes from 'prop-types';

import './footer.scss';

export default class Footer extends React.Component {

    static propTypes = {

    };

    static defaultProps = {};

    constructor(props){
        super(props);
    }

    render(){
        return(<footer className="footer">
            <div className="one" />
            <div className="two">
                <div className="contacts">
                    <a href="tel:050 123 45 67">050 123 45 67</a>
                    /
                    <a href="tel:066 123 45 67">066 123 45 67</a>
                </div>
                <p className="p">All Rights Reserved 2017</p>
            </div>
            <div className="three"/>
            <div className="four"/>
        </footer>)
    }
};