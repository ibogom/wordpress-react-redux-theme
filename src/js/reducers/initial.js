import { initialTypes } from '../actions';

const defaultState = {
    loaded: false
};

const initial = (state = defaultState, action) => {
    switch (action.type) {
        case initialTypes.GET_INITIAL_REQUEST:
            return {
              loaded: false
            };
        case initialTypes.GET_INITIAL_REQUEST_COMPLETE:
            return {
                loaded: true,
            };
        case initialTypes.GET_INITIAL_REQUEST_FAILED:
            return {
                loaded: true,
            };
        default:
            return state;
    }
};

export default initial;