import { useEffect, useState, useContext } from "react";
import { PostContext } from "../../context/post/PostProvider";

const Posts = () => {
  // const [posts, setPosts] = useState<Posts[]>([]);
  // console.log("test", fetchAllData(""));
  const { posts, getPosts } = useContext(PostContext);

  useEffect(() => {
    getPosts();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <h1>Dobrodošli ponovo1</h1>
      {posts && posts.map((post) => <li>{post.id}</li>)}
    </div>
  );
};

export default Posts;
