import { useEffect, useState, useContext } from "react";
import { PostContext } from "../../context/post/PostProvider";

import styles from "./Posts.module.css";

const Posts = () => {
  // const [posts, setPosts] = useState<Posts[]>([]);
  // console.log("test", fetchAllData(""));
  const { posts, loading, getPosts } = useContext(PostContext);

  useEffect(() => {
    getPosts();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <h1>Postovi</h1>
      {loading ? "ucitava" : "fin"}
      {posts &&
        posts.map((post) => {
          return (
            <div className={styles.post_container} key={post.id}>
              <div>{post.title}</div>
              <div>{post.user?.name}</div>
            </div>
          );
        })}
    </div>
  );
};

export default Posts;
