import * as routeTypes from './routeTypes';

export function setRoute(route) {
    return {
        type: routeTypes.SET_ROUTE,
        route: route
    }
};