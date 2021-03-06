export const ROUTES = {
    MAIN: '/',
    USERS: '/users',
    SIGNIN: '/sign-in',
    PROFILE: '/profile',
}

export const ACTION_TYPES = {

    // auth
    ON_CHANGE_PHONE: ' ON_CHANGE_PHONE',
    ON_CHANGE_PASSWORD: ' ON_CHANGE_PASSWORD',
    SIGN_IN_START: 'SIGN_IN_START',
    SIGN_IN_SUCCESS: 'SIGN_IN_SUCCESS',
    SIGN_IN_FAILURE: 'SIGN_IN_FAILURE',
    SIGN_OUT: 'SIGN_OUT',

    
    // users
    GET_USERS_START: 'GET_USERS_START',
    GET_USERS_SUCCESS: 'GET_USERS_SUCCESS',
    GET_USERS_FAILURE: 'GET_USERS_FAILURE',
    
    // user's profile
    GET_USER_PROFILE_START: 'GET_USER_PROFILE_START',
    GET_USER_PROFILE_SUCCESS: 'GET_USER_PROFILE_SUCCESS',
    GET_USER_PROFILE_FAILURE: 'GET_USER_PROFILE_FAILURE',
}