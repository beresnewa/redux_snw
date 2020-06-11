import { ACTION_TYPES } from '../const';

const initialState = {
    user: {},
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.GET_USER_PROFILE_START: {
            return {
                ...state,
            }
        }

        case ACTION_TYPES.GET_USER_PROFILE_SUCCESS: {
            return {
                ...state,
                user: action.payload,
            }
        }

        case ACTION_TYPES.GET_USER_PROFILE_FAILURE: {
            return {
                ...state,
            }
        }

        default: return state;
    }
}
