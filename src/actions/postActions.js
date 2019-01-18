import { FETCH_POSTS, NEW_POSTS } from '../actions/types';

export function fetchPosts() {
    return function(dispatch) {
        console.log('dispatch return --- postActions.js');
        dispatch({
            type : FETCH_POSTS,
            posts: posts
        })
    }
}