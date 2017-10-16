import * as apiTypes from '../apiTypes';
import axios from 'axios';

function requestMenuItems(id) {
    return {
        type: apiTypes.GET_MENU_ITEMS,
        id
    }
}

function onGetMenuItemsSuccess(menu) {
    return {
        type: apiTypes.GET_MENU_ITEMS_SUCCESS,
        id: menu.data.ID,
        menu,
        receivedAt: Date.now()
    }
}

function onGetMenuItemsFail(error) {
    return {
        type: apiTypes.GET_MENU_ITEMS_FAIL,
        error,
        receivedAt: Date.now()
    }
}


export function getMenuItems(menus) {
    return dispatch => {
        menus.data.every(menu => {
            const url = apiTypes.API_MENUS_URL + menu.ID;
            dispatch(requestMenuItems(menu.ID));
            return axios.get(url)
                .then(response => dispatch(onGetMenuItemsSuccess(response)))
                .catch(error => dispatch(onGetMenuItemsFail(error)))
        });
    }
}