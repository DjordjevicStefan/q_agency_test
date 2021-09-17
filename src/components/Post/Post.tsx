import { useParams } from "react-router";
import { useEffect, useContext } from "react";
import { PostContext } from "../../context/post/PostProvider";

const Post = () => {
  const { post, getPostById } = useContext(PostContext);
  const { postId } = useParams<{ postId: string }>();

  useEffect(() => {
    getPostById(parseInt(postId));
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      {!post && "loading"}
      {post && "rederuj nesto"}
    </div>
  );
};

export default Post;