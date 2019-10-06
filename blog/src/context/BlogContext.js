import createDataContext from './createDataContext';

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_BLOGPOST':
      return [...state, { title: `Blog Post #${state.length + 1}` }];
    default:
      return state;
  }
};

const addBlogPost = dispatch => () => dispatch({ type: 'ADD_BLOGPOST' });

export const { Context, Provider } = createDataContext(blogReducer, { addBlogPost }, []);
