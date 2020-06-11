import { ACTION_TYPES } from '../const';
import axios from 'axios';

export const getUsersStart = () => ({
    type: ACTION_TYPES.GET_USERS_START,
});

export const getUsersSuccess = (users) =>({
    type: ACTION_TYPES.GET_USERS_SUCCESS,
    payload: users,
});

export const getUsersFailure = (err) =>({
    type: ACTION_TYPES.GET_USERS_FAILURE,
    payload: err,
});

export const getUsers = () => {
    
    return async (dispatch) => {

        dispatch(getUsersStart());

        // выполнение запроса
        try {
            const response = await axios.get('http://localhost:3001/users');
            // запрос успешен
            dispatch(getUsersSuccess(response.data));
        } catch (err){
            // запрос сломался
            dispatch(getUsersFailure(err));
        }
    }
}
