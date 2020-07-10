import * as actions from '../action';
import { updateObject } from '../../utils/utility';

const initState = {
    posts: [],
    categories: [
        { title: 'Posts', active: true, icon: 'fa fa-newspaper-o' },
        { title: 'Achievements', active: false, icon: 'fa fa-trophy' },
    ],
    error: false,
    loading: false,
    message: null,
};

const fetchPostsStart = (state, action) => {
    return updateObject(state, { loading: true, categories: action.categories, message: null });
};

const fetchPostsSuccess = (state, action) => {
    return updateObject(state, { posts: action.posts, loading: false, message: null });
};

const fetchPostsFailed = (state, action) => {
    return updateObject(state, { loading: false, message: action.message });
};

const addPostStart = (state, action) => {
    return updateObject(state, { loading: true, message: null });
};

const addPostSuccess = (state, action) => {
    return updateObject(state, { loading: false, message: action.message });
};

const addPostFailed = (state, action) => {
    return updateObject(state, { loading: false, message: action.message });
};

export const postReducer = (state = initState, action) => {
    switch (action.type) {
        case actions.FETCH_POSTS_START:
            return fetchPostsStart(state, action);
        case actions.FETCH_POSTS_SUCCESS:
            return fetchPostsSuccess(state, action);
        case actions.FETCH_POSTS_FAILED:
            return fetchPostsFailed(state, action);
        case actions.ADD_POST_START:
            return addPostStart(state, action);
        case actions.ADD_POST_SUCCESS:
            return addPostSuccess(state, action);
        case actions.ADD_POST_FAILED:
            return addPostFailed(state, action);
        default:
            return state;
    }
};
