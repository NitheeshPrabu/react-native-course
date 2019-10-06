import createDataContext from './createDataContext';

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_BLOGPOST':
      return [
        ...state,
        { id: Math.floor(Math.random() * 99999), title: `Blog Post #${state.length + 1}` }
      ];
    case 'DELETE_BLOGPOST':
      return state.filter(blogPost => blogPost.id !== action.payload);
    default:
      return state;
  }
};

const addBlogPost = dispatch => () => dispatch({ type: 'ADD_BLOGPOST' });

const deleteBlogPost = dispatch => id => dispatch({ type: 'DELETE_BLOGPOST', payload: id });

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost },
  []
);
