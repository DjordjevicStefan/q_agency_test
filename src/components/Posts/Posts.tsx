import { useEffect, useContext } from "react";
import { PostContext } from "../../context/post/PostProvider";
import List from "../List/List";

// import styles from "./Posts.module.css";

const Posts = () => {
  const { posts, getPosts } = useContext(PostContext);

  useEffect(() => {
    getPosts();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <h1>Postovi</h1>
      <div className='post_block'>{posts && <List data={posts} />}</div>
    </div>
  );
};

export default Posts;
