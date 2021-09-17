import { useParams } from "react-router";
import { useEffect, useContext } from "react";
import { PostContext } from "../../context/post/PostProvider";

interface PropsInterface {
  message: string;
}

const Post = ({ message }: PropsInterface) => {
  console.log(message + "Post");
  const { post, getPostById } = useContext(PostContext);
  const { postId } = useParams<{ postId: string }>();

  useEffect(() => {
    getPostById(parseInt(postId));
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      {!post && "loading"}
      {post && <h1>{post.id}</h1>}
    </div>
  );
};

export default Post;
