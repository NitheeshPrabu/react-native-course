import React, { createContext, useState } from 'react';

const BlogContext = createContext();

const BlogProvider = ({ children }) => {
  const [blogPosts, setBlogPosts] = useState([]);

  const addBlogPost = () => {
    setBlogPosts([...blogPosts, { title: `Blog Post #${blogPosts.length + 1}` }]);
  };

  return (
    <BlogContext.Provider value={{ data: blogPosts, addBlogPost }}>{children}</BlogContext.Provider>
  );
};

export { BlogProvider };
export default BlogContext;
