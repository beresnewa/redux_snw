import {ACTION_TYPES} from '../const';

const initialState = {
    users: [],
    
}
export default (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.GET_USERS_START: {
            return {
                ...state,
            }
        }

         case ACTION_TYPES.GET_USERS_SUCCESS: {
             return {
                 ...state,
                 users: action.payload,
             }
        }

        case ACTION_TYPES.GET_USERS_FAILURE: {
            return {
                ...state,
            }
        }

        default: return state;
    }
}
