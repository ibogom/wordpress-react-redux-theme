import { actionTypes } from '../actions';

const routes = (state = [], action) => {
    switch (action.type) {
        case actionTypes.SET_ROUTE:
            return {
                route: action.route,
            };
        default:
            return state;
    }
};

export default routes;