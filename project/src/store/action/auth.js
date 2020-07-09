import axios from 'axios';
import * as actionTypes from './actionTypes';

export const loginSuccess = (token, message) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        token: token,
        message: message,
    };
};

export const loginFailed = (error) => {
    return {
        type: actionTypes.AUTH_FAILED,
        error: error,
    };
};

export const loginStart = () => {
    return {
        type: actionTypes.AUTH_START,
    };
};

export const loginEnd = () => {
    return {
        type: actionTypes.AUTH_END,
    };
};

export const logOut = () => {
    localStorage.removeItem('token');
    return {
        type: actionTypes.AUTH_LOGOUT,
    };
};

export const setAuthRedirectPath = (path) => {
    return {
        type: actionTypes.SET_AUTH_REDIRECT_PATH,
        path: path,
    };
};

export const checkAuthTimeOut = (expirationTime) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(logOut());
        }, expirationTime * 1000);
    };
};

export const doLogin = (email, password) => {
    return (dispatch) => {
        const url = `${process.env.REACT_APP_BACKEND_URL}/login`;
        const body = { email: email, password: password };
        dispatch(loginStart());
        axios
            .post(url, body)
            .then((res) => {
                const { token, message } = res.data;
                localStorage.setItem('token', token);
                dispatch(loginSuccess(token, message));
                //1 hour
                dispatch(checkAuthTimeOut(3600));
            })
            .catch((error) => {
                dispatch(loginFailed(error));
            });
    };
};
