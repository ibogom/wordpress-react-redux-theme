import * as apiTypes from '../apiTypes';
import axios from 'axios';

function requestPosts() {
    return {
        type: apiTypes.GET_PAGES
    }
}

function receivePagesSuccess(pages) {
    return {
        type: apiTypes.GET_PAGES_SUCCESS,
        pages,
        receivedAt: Date.now()
    }
}

function receivePagesFail(error) {
    return {
        type: apiTypes.GET_PAGES_FAIL,
        error,
        receivedAt: Date.now()
    }
}


export function getPages() {
    const url = apiTypes.API_PAGES_URL;
    return dispatch => {
        dispatch(requestPosts());
        return axios.get(url)
            .then(response => dispatch(receivePagesSuccess(response)))
            .catch(error => dispatch(receivePagesFail(error)))
    }
}