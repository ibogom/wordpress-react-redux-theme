import * as apiTypes from '../apiTypes';
import axios from 'axios';

function requestPosts(id) {
    return {
        type: apiTypes.GET_POSTS,
        id
    }
}

function receivePostsSuccess(id, posts) {
    return {
        type: apiTypes.GET_POSTS_SUCCESS,
        id,
        posts,
        receivedAt: Date.now()
    }
}

function receivePostsFail(id, error) {
    return {
        type: apiTypes.GET_POSTS_FAIL,
        id,
        error,
        receivedAt: Date.now()
    }
}


export function fetchPosts(id) {
    const url = apiTypes.API_POSTS_URL + (id || '');
    return dispatch => {
        dispatch(requestPosts(id));
        return axios.get(url)
            .then(response => dispatch(receivePostsSuccess(id, response)))
            .catch(error => dispatch(receivePostsFail(id, error)))
    }
}