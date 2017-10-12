import * as actionTypes from './actionTypes';

export function setRoute(route) {
    return {
        type: actionTypes.SET_ROUTE,
        route: route
    }
};