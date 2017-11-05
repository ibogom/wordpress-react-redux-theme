import React from "react";
import {connect} from 'react-redux';
import { AppActions } from '../../actions';

/** COMPONENTS **/
import {Footer} from '../../components';

const FooterContainer = connect()(Footer);

export default FooterContainer;