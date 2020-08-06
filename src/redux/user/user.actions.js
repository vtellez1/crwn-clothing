import UserActionTypes from './user.types';

export const setCurrentUser = user => ({
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user
});

export const googleSignInStart = () => ({
    type: UserActionTypes.GOOGLE_SIGN_IN_START
});

export const googleSignInFailure = user => ({
    type: UserActionTypes.GOOGLE_SIGN_IN_SUCCESS,
    payload: user
});

export const googleSignInSuccess = error => ({
    type: UserActionTypes.GOOGLE_SIGN_IN_FAILURE,
    payload: error
});

export const emailSignInStart = emailAndPassword => ({
    type: UserActionTypes.EMAIL_SIGN_IN_START,
    payload: emailAndPassword
});

export const emailSignInFailure = user => ({
    type: UserActionTypes.EMAIL_SIGN_IN_SUCCESS,
    payload: user
});

export const emailSignInSuccess = error => ({
    type: UserActionTypes.EMAIL_SIGN_IN_FAILURE,
    payload: error
});