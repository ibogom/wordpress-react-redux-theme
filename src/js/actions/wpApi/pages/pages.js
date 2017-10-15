import * as apiTypes from '../apiTypes';
import axios from 'axios';

function requestPosts(id) {
    return {
        type: apiTypes.GET_PAGES,
        id
    }
}

function receivePagesSuccess(id, pages) {
    return {
        type: apiTypes.GET_PAGES_SUCCESS,
        id,
        pages,
        receivedAt: Date.now()
    }
}

function receivePagesFail(id, error) {
    return {
        type: apiTypes.GET_PAGES_FAIL,
        id,
        error,
        receivedAt: Date.now()
    }
}


export function getPages(id) {
    const url = apiTypes.API_PAGES_URL + (id || '');
    return dispatch => {
        dispatch(requestPosts(id));
        return axios.get(url)
            .then(response => dispatch(receivePagesSuccess(id, response)))
            .catch(error => dispatch(receivePagesFail(id, error)))
    }
}