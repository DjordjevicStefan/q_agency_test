import { useParams } from "react-router";
import { useEffect, useContext } from "react";
import { PostContext } from "../../context/post/PostProvider";
import Spinner from "../Spinner/Spinner";

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
    <>
      {!post && <Spinner />}
      <div className='card border-success mb-3'>
        {post && (
          <>
            <div className='card-header bg-success border-success'>
              <h3>Post number: {post.id}</h3>
            </div>
            <div className='card-body text-dark'>
              <h5 className='card-title'>{post.title}</h5>
              <p className='card-text'>{post.body}</p>
            </div>
            <div className='card-footer bg-transparent border-success'>
              Writen by: <span className='fst-italic'>{post.user?.name}</span>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Post;
