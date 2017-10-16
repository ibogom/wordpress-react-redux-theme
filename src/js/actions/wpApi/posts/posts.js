import * as apiTypes from '../apiTypes';
import axios from 'axios';

function requestPosts() {
    return {
        type: apiTypes.GET_POSTS,
    }
}

function receivePostsSuccess(posts) {
    return {
        type: apiTypes.GET_POSTS_SUCCESS,
        posts,
        receivedAt: Date.now()
    }
}

function receivePostsFail(error) {
    return {
        type: apiTypes.GET_POSTS_FAIL,
        error,
        receivedAt: Date.now()
    }
}


export function getPosts() {
    const url = apiTypes.API_POSTS_URL;
    return dispatch => {
        dispatch(requestPosts());
        return axios.get(url)
            .then(response => dispatch(receivePostsSuccess(response)))
            .catch(error => dispatch(receivePostsFail(error)))
    }
}