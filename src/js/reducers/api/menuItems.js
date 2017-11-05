import { apiTypes } from '../../actions';

const menuItems = (state = [], action) => {
    switch (action.type) {
        case apiTypes.GET_MENU_ITEMS_SUCCESS:
            return [...state, {
                id: action.id,
                items: action.menu.data.items,
            }];
        case apiTypes.GET_MENU_ITEMS_FAIL:
            return Object.assign({}, state, {
                [apiTypes.GET_MENU_ITEMS_FAIL]: action.error,
            });
        default:
            return state;
    }
};

export default menuItems;