import UserActionTypes from './user.types';

export const googleSignInStart = () => ({
    type: UserActionTypes.GOOGLE_SIGN_IN_START
});

export const signInFailure = user => ({
    type: UserActionTypes.SIGN_IN_FAILURE,
    payload: user
});

export const signInSuccess = error => ({
    type: UserActionTypes.SIGN_IN_SUCCESS,
    payload: error
});

export const emailSignInStart = emailAndPassword => ({
    type: UserActionTypes.EMAIL_SIGN_IN_START,
    payload: emailAndPassword
});