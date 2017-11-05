import { appTypes } from '../actions';

const app = (state = [], action) => {
    switch (action.type) {
        case appTypes.OPEN_MENU:
            return {
                isMenuOpen: true
            };
        case appTypes.CLOSE_MENU:
            return {
                isMenuOpen: false
            };
        default:
            return state;
    }
};

export default app;