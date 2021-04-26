import { AsyncStorage } from 'react-native';
import {
  ADD_BLOG, UPDATE_BLOG, REMOVE_BLOG,LOAD_BLOG
} from '../constants/Redux';

export const blogReducer = (state = [], action) => {
  console.log(action.payload);
  let blogs = state;
  switch (action.type) {
    case ADD_BLOG:
      blogs = [...state, { ...action.payload }];
      break;
    case LOAD_BLOG:
      blogs = [...state, ...action.payload ];
      break;
    case UPDATE_BLOG:
      blogs = state.map((blog) => {
        if (blog.id === action.payload.id) {
          return action.payload;
        }
        return blog;
      });
      break;
    case REMOVE_BLOG:
      blogs = state.filter((blog) => blog.id !== action.id);
      break;
    default:
      return state;
  }
  // AsyncStorage.setItem('blogs', JSON.stringify(blogs));
  return blogs;
}