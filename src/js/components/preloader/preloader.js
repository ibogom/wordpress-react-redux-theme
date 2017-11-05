import React from 'react';

import './preloader.scss';

export default class Preloader extends React.Component {

    render() {
        return (<div className="spinner">
            <div className="dot1"/>
            <div className="dot2"/>
        </div>)
    }
};