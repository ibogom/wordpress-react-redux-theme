import * as apiTypes from '../apiTypes';
import axios from 'axios';

function requestMenus() {
    return {
        type: apiTypes.GET_MENUS
    }
}

function onGetMenuSuccess(menus) {
    return {
        type: apiTypes.GET_MENUS_SUCCESS,
        menus,
        receivedAt: Date.now()
    }
}

function onGetMenusFail(error) {
    return {
        type: apiTypes.GET_MENUS_FAIL,
        error,
        receivedAt: Date.now()
    }
}

export function getMenus() {
    const url = apiTypes.API_MENUS_URL;
    return dispatch => {
        dispatch(requestMenus());
        return axios.get(url)
            .then(response => dispatch(onGetMenuSuccess(response)))
            .catch(error => dispatch(onGetMenusFail(error)))
    }
}