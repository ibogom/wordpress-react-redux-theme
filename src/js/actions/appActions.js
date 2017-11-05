import * as appTypes from './appTypes';

export function openMenu() {
    return {
        type: appTypes.OPEN_MENU,
    }
};

export function closeMenu() {
    return {
        type: appTypes.CLOSE_MENU
    }
};