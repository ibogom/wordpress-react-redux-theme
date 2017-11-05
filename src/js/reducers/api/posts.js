import { apiTypes } from '../../actions';

const posts = (state = [], action) => {
    switch (action.type) {
        case apiTypes.GET_POSTS:
            return Object.assign({}, state, {
                loaded: false
            });
        case apiTypes.GET_POSTS_SUCCESS:
            return Object.assign({}, state, {
                data: action.posts.data,
                loaded: true
            });
        case apiTypes.GET_POSTS_FAIL:
            return Object.assign({}, state, {
                [apiTypes.GET_POSTS_FAIL]: action.error,
                loaded: true
            });
        default:
            return state;
    }
};

export default posts;