import createDataContext from './createDataContext';
import jsonServer from '../api/jsonServer';

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'GET_BLOGPOSTS':
      return action.payload;
    case 'DELETE_BLOGPOST':
      return state.filter(blogPost => blogPost.id !== action.payload);
    case 'EDIT_BLOGPOST':
      return state.map(blogPost => (blogPost.id === action.payload.id ? action.payload : blogPost));
    default:
      return state;
  }
};

const getBlogPosts = dispatch => async () => {
  const response = await jsonServer.get('/blogposts');
  dispatch({ type: 'GET_BLOGPOSTS', payload: response.data });
};

const addBlogPost = dispatch => async (title, content, callback) => {
  await jsonServer.post('/blogposts', { title, content });
  if (callback) {
    callback();
  }
};

const editBlogPost = dispatch => async (id, title, content, callback) => {
  await jsonServer.put(`/blogposts/${id}`, { title, content });
  dispatch({ type: 'EDIT_BLOGPOST', payload: { id, title, content } });
  if (callback) {
    callback();
  }
};

const deleteBlogPost = dispatch => async id => {
  await jsonServer.delete(`/blogposts/${id}`);
  dispatch({ type: 'DELETE_BLOGPOST', payload: id });
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { getBlogPosts, addBlogPost, deleteBlogPost, editBlogPost },
  []
);
