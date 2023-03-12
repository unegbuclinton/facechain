/* import component */
import EmptyPost from './emptypost';
import Post from './post';

import { useEffect, useState } from 'react';
// import useFetchPosts from '../../hooks/post/usefetchpost';
// import { usePostContext } from '../../hooks/post/usepostcontext';
import SkeletonPosts from '../skeletons/skeletonposts';

const Posts = () => {
  // const { isLoading, source, fetchPosts } = useFetchPosts();
  // const { posts } = usePostContext();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {isLoading && <SkeletonPosts />}
      <Post /> : <EmptyPost />
    </>
  );
};

export default Posts;
