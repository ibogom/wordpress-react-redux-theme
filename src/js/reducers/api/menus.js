import { apiTypes } from '../../actions';

const menus = (state = [], action) => {
    switch (action.type) {
        case apiTypes.GET_MENUS:
            return Object.assign({}, state, {
                loaded: false
            });
        case apiTypes.GET_MENUS_SUCCESS:
            return Object.assign({}, state, {
                id: action.id,
                menus: action.menus.data,
                loaded: true
            });
        case apiTypes.GET_MENUS_FAIL:
            return Object.assign({}, state, {
                [apiTypes.GET_MENUS_FAIL]: action.error,
                loaded: true
            });
        default:
            return state;
    }
};

export default menus;