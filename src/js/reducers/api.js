import { apiTypes } from '../actions';

const api = (state = [], action) => {
    switch (action.type) {
        case apiTypes.GET_PAGES_SUCCESS:
            return Object.assign({}, state, {
                pages: action.pages,
            });
        case apiTypes.GET_POSTS_SUCCESS:
            return Object.assign({}, state, {
                posts: action.posts,
            });
        case apiTypes.GET_POSTS_FAIL:
            return Object.assign({}, state, {
                error: action.error
            });
        case apiTypes.GET_PAGES_FAIL:
            return Object.assign({}, state, {
                error: action.error
            });
        default:
            return state;
    }
};

export default api;