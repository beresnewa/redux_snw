import axios from 'axios';

import { ACTION_TYPES } from '../const';

export const onChangePhone = (phoneValue) => {
  return {
    type: ACTION_TYPES.ON_CHANGE_PHONE,
    payload: phoneValue,
  }
}

export const onChangePassword = (passwordValue) => {
  return {
    type: ACTION_TYPES.ON_CHANGE_PASSWORD,
    payload: passwordValue,
  }
}

const signInStart = () => {
  return {
    type: ACTION_TYPES.SIGN_IN_START,
  }
}

const signInSuccess = (userData) => {
  return {
    type: ACTION_TYPES.SIGN_IN_SUCCESS,
    payload: userData,
  }
}

const signInFailure = (err) => {
  return {
    type: ACTION_TYPES.SIGN_IN_FAILURE,
    payload: err,
  }
}

export const signIn = (phone, password) => {
  return async (dispatch) => {

    dispatch(signInStart());

    try {
      const response = await axios.post('http://localhost:3001/auth/sign-in', {
      phone,
      password,
    });
      // console.log(response);
      dispatch( signInSuccess(response.data));

    } catch(err) {

      dispatch( signInFailure(err.message));
    }
  }
}

export const autoSignIn = (token) => {
  return async (dispatch) => {

    dispatch({
      type: 'AUTO_SIGN_IN_START',
    });

    try {
      const response = await axios.post('http://localhost:3001/auth/sign-in', {
      token,
    });
  
      dispatch( signInSuccess(response.data));

    } catch(err) {

      dispatch(signInFailure(err.message));
    }
  }
}

export const signOutStart = () => {
  return {
    type: ACTION_TYPES.SIGN_OUT,
  }
}

export const signOut = () => {
  return async (dispatch) => {

    dispatch(signOutStart());
    localStorage.removeItem ('token');
    window.location.href = 'http://localhost:3000';
    
  }
}


