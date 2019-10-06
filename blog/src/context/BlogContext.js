import React, { createContext } from 'react';

const BlogContext = createContext();

const BlogProvider = ({ children }) => {
  return <BlogContext.Provider>{children}</BlogContext.Provider>;
};

export { BlogProvider };
