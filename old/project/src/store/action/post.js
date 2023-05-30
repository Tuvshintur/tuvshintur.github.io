import axios from 'axios';
import * as actionTypes from './actionTypes';

export const fetchPostsStart = (categories) => {
    return {
        type: actionTypes.FETCH_POSTS_START,
        categories: categories,
        posts: [],
    };
};

export const fetchPostsSuccess = (posts) => {
    return {
        type: actionTypes.FETCH_POSTS_SUCCESS,
        posts: posts,
    };
};

export const fetchPostsFailed = (error) => {
    return {
        type: actionTypes.FETCH_POSTS_FAILED,
        error: error,
    };
};

export const fetchPosts = (categories, title = 'Posts') => {
    return (dispatch) => {
        const url = `${process.env.REACT_APP_BACKEND_URL}/posts?category=${title}`;
        dispatch(fetchPostsStart(categories));
        axios
            .get(url)
            .then((res) => {
                dispatch(fetchPostsSuccess(res.data));
            })
            .catch((error) => {
                dispatch(fetchPostsFailed(error));
            });
    };
};

export const addPostStart = () => {
    return {
        type: actionTypes.ADD_POST_START,
    };
};

export const addPostSuccess = (message) => {
    return {
        type: actionTypes.ADD_POST_SUCCESS,
        message: message,
    };
};

export const addPostFailed = (error) => {
    return {
        type: actionTypes.ADD_POST_FAILED,
        error: error,
    };
};

export const addPost = (post, token) => {
    return (dispatch) => {
        const url = `${process.env.REACT_APP_BACKEND_URL}/posts`;
        const config = {
            headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
        };

        dispatch(addPostStart());
        axios
            .post(url, post, config)
            .then((res) => {
                const { message } = res.data;
                dispatch(addPostSuccess(message));
            })
            .catch((error) => {
                if (error.response) dispatch(addPostFailed(error));
            });
    };
};

export const fetchPostStart = () => {
    return {
        type: actionTypes.FETCH_POST_START,
        post: {},
    };
};

export const fetchPostSuccess = (post) => {
    return {
        type: actionTypes.FETCH_POST_SUCCESS,
        post: post,
    };
};

export const fetchPostFailed = (error) => {
    return {
        type: actionTypes.FETCH_POST_FAILED,
        error: error,
    };
};

export const fetchPost = (id) => {
    return (dispatch) => {
        const url = `${process.env.REACT_APP_BACKEND_URL}/posts/${id}`;
        dispatch(fetchPostStart());
        axios
            .get(url)
            .then((res) => {
                dispatch(fetchPostSuccess(res.data));
            })
            .catch((error) => {
                dispatch(fetchPostFailed(error));
            });
    };
};
