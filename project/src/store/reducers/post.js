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
};

const fetchPostsStart = (state, action) => {
    return updateObject(state, { loading: true, categories: action.categories });
};

const fetchPostsSuccess = (state, action) => {
    return updateObject(state, { posts: action.posts, loading: false });
};

const fetchPostsFailed = (state, action) => {
    return updateObject(state, { loading: false });
};

export const postReducer = (state = initState, action) => {
    switch (action.type) {
        case actions.FETCH_POSTS_START:
            return fetchPostsStart(state, action);
        case actions.FETCH_POSTS_SUCCESS:
            return fetchPostsSuccess(state, action);
        case actions.FETCH_POSTS_FAILED:
            return fetchPostsFailed(state, action);
        default:
            return state;
    }
};
