import { useEffect, useContext } from "react";
import { useHistory } from "react-router";
import { PostContext } from "../../context/post/PostProvider";
import List from "../List/List";

import styles from "./Posts.module.css";

const Posts = () => {
  const { posts, loading, getPosts } = useContext(PostContext);


  useEffect(() => {
    getPosts();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <h1>Postovi</h1>
      {loading ? "ucitava" : "fin"}
      <div className="post_block">
        {posts && <List data={posts} /> }
      </div> 
    </div>
  );
};

export default Posts;
