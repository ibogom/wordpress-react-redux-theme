import * as initialTypes from './initialTypes';
import * as ApiActions from '../wpApi';
import * as ApiTypes from '../wpApi/apiTypes';

function requestInitialData() {
    return {
        type: initialTypes.GET_INITIAL_REQUEST
    }
}

function onGetInitialRequestComplete(data) {
    return {
        type: initialTypes.GET_INITIAL_REQUEST_COMPLETE,
        receivedAt: Date.now()
    }
}

function onGetInitialRequestFailed(error) {
    return {
        type: initialTypes.GET_INITIAL_REQUEST_FAILED,
        error,
        receivedAt: Date.now()
    }
}

export function initialRequest() {
    return dispatch => {

        dispatch(requestInitialData());

        let getPages = dispatch(ApiActions.getPages());
        let getMenus = dispatch(ApiActions.getMenus());

        return Promise.all([getPages, getMenus]).then(responses => {

            const menuItems = [];

            responses.forEach(response =>{
                response.type === ApiTypes.GET_MENUS_SUCCESS && response.menus.data.forEach(menu => {
                    menuItems.push(dispatch(ApiActions.getMenuItems(menu)));
                });
            });

            return Promise.all(menuItems)
                          .then(response => dispatch(onGetInitialRequestComplete(response)))
                          .catch(error => dispatch(onGetInitialRequestFailed(error)));
        });
    }
};