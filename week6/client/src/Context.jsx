import React, { createContext, useContext, useEffect, useState } from 'react';

const PostContext = createContext();

const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setIsLoading(true);
    async function getPosts() {
      const res = await fetch('http://localhost:5000/');
      const data = await res.json();
      setPosts(data);
      setIsLoading(false);
    }
    getPosts();
  }, [page]);

  return (
    <PostContext.Provider
      value={{ posts, setPosts, isLoading, setIsLoading, page, setPage }}
    >
      {children}
    </PostContext.Provider>
  );
};

const usePost = () => {
  const context = useContext(PostContext);
  if (context === undefined) {
    throw new Error('usePost must be used within a PostProvider');
  }
  return context;
};

export { PostContext, PostProvider, usePost };
