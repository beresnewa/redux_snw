import { ACTION_TYPES } from '../const';
import axios from 'axios';
import { useReducer } from 'react';

export const getUserProfileStart = () => ({
    type: ACTION_TYPES.GET_USER_PROFILE_START,
});

export const getUserProfileSuccess = (user) => ({
    type: ACTION_TYPES.GET_USER_PROFILE_SUCCESS,
    payload: user,
});

export const getUserProfileFailure = (err) => ({
    type: ACTION_TYPES.GET_USER_PROFILE_FAILURE,
    payload: err,
});

export const getUserProfile = (index) => {

    return async (dispatch) => {

        dispatch (getUserProfileStart ());

        try {
            const response = await axios.get(`https://serverless-backend-ky9b8rmuq.now.sh/api/users/${index}`);
            dispatch (getUserProfileSuccess (response.data));
            console.log('0=0=0==0 success profile');
        } catch (err) {
            dispatch(getUserProfileFailure(err));
            console.log('0=0=0==0 failure profile');
        }
    }
}

