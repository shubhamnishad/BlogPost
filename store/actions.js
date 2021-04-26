import {
  UPDATE_BLOG, ADD_BLOG, REMOVE_BLOG, LOAD_BLOG
} from '../constants/Redux';


export const loadBlogs = (payload = []) => ({
  type: LOAD_BLOG,
  payload: [...payload]
});
export const addBlog = (payload) => ({
  type: ADD_BLOG,
  payload: { ...payload },
});

export const updateBlog = (payload) => ({
  type: UPDATE_BLOG,
  payload: { ...payload }
});

export const removeBlog = (id) => ({
  type: REMOVE_BLOG,
  id
});
