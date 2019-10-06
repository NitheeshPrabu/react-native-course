import createDataContext from './createDataContext';
import jsonServer from '../api/jsonServer';

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'GET_BLOGPOSTS':
      return action.payload;
    case 'ADD_BLOGPOST':
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 99999),
          title: action.payload.title,
          content: action.payload.content
        }
      ];
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
  dispatch({ type: 'ADD_BLOGPOST', payload: { title, content } });
  if (callback) {
    callback();
  }
};

const editBlogPost = dispatch => (id, title, content, callback) => {
  dispatch({ type: 'EDIT_BLOGPOST', payload: { id, title, content } });
  if (callback) {
    callback();
  }
};

const deleteBlogPost = dispatch => id => dispatch({ type: 'DELETE_BLOGPOST', payload: id });

export const { Context, Provider } = createDataContext(
  blogReducer,
  { getBlogPosts, addBlogPost, deleteBlogPost, editBlogPost },
  []
);
