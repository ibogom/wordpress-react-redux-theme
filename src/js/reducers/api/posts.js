import { apiTypes } from '../../actions';

const posts = (state = [], action) => {
    switch (action.type) {
        case apiTypes.GET_POSTS_SUCCESS:
            return Object.assign({}, state, {
                data: action.posts.data,
            });
        case apiTypes.GET_POSTS_FAIL:
            return Object.assign({}, state, {
                [apiTypes.GET_POSTS_FAIL]: action.error
            });
        default:
            return state;
    }
};

export default posts;