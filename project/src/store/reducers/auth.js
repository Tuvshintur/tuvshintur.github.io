import * as actions from '../action';
import { updateObject } from '../../utils/utility';

const initState = {
    token: null,
    message: null,
    loading: false,
    authRedirectPath: '/',
};

const loginStart = (state, action) => {
    return updateObject(state, { loading: true });
};

const loginSuccess = (state, action) => {
    return updateObject(state, { token: action.token, message: action.message });
};

const loginFailed = (state, action) => {
    return updateObject(state, { loading: false });
};

const setAuthRedirectPath = (state, action) => {
    return updateObject(state, { authRedirectPath: action.path });
};

export const authReducer = (state = initState, action) => {
    switch (action.type) {
        case actions.AUTH_START:
            return loginStart(state, action);
        case actions.AUTH_SUCCESS:
            return loginSuccess(state, action);
        case actions.AUTH_FAILED:
            return loginFailed(state, action);
        case actions.SET_AUTH_REDIRECT_PATH:
            return setAuthRedirectPath(state, action);
        default:
            return state;
    }
};
