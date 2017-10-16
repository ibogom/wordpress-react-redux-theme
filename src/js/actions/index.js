import * as apiTypes from './wpApi/apiTypes';
import * as ApiActions from './wpApi';

import * as routeTypes from './routes/routeTypes';
import * as RouteActions from './routes/routes';

export { apiTypes }
export { ApiActions }

export { routeTypes }
export { RouteActions }

export function initialRequest() {
    return dispatch => {
        dispatch(ApiActions.getPages())
            .then(dispatch(ApiActions.getMenus()));
    }
};