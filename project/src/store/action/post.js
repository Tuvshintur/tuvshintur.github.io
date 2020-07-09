import axios from 'axios';
import * as actionTypes from './actionTypes';

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

export const fetchPostsStart = (categories) => {
    return {
        type: actionTypes.FETCH_POSTS_START,
        categories: categories,
        posts: [],
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
