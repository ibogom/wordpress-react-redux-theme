import { apiTypes } from '../../actions';

const pages = (state = [], action) => {
    switch (action.type) {
        case apiTypes.GET_PAGES:
            return Object.assign({}, state, {
                loaded: false
            });
        case apiTypes.GET_PAGES_SUCCESS:
            return Object.assign({}, state, {
                data: action.pages.data,
                loaded: true
            });
        case apiTypes.GET_PAGES_FAIL:
            return Object.assign({}, state, {
                [apiTypes.GET_PAGES_FAIL]: action.error,
                loaded: true
            });
        default:
            return state;
    }
};

export default pages;