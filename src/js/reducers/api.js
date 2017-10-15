import { apiTypes } from '../actions';

const api = (state = [], action) => {
    switch (action.type) {
        case apiTypes.GET_POSTS_SUCCESS:
            return {
                posts: action.posts,
            };
        case apiTypes.GET_POSTS_FAIL:
            return {
                error: action.error
            };
        default:
            return state;
    }
};

export default api;