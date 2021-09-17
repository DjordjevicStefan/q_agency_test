import { useEffect, useContext } from "react";
import { PostContext } from "../../context/post/PostProvider";
import { postInterface } from "../../context/post/postState";
import List from "../List/List";
import SearchBox from "../SearchBox/SearchBox";

// import styles from "./Posts.module.css";

interface PropsInterface {
  message: string;
}

const Posts = ({ message }: PropsInterface) => {
  console.log(message + "Posts");
  const { posts, searchPostsResult, getPosts } = useContext(PostContext);

  useEffect(() => {
    getPosts();
    // eslint-disable-next-line
  }, []);

  const rednerList = (searchPostsResult: postInterface[]) => {
    if (searchPostsResult.length) {
      return <div className='post_block'>{posts && <List message={message} data={searchPostsResult} />}</div>;
    } else {
      return <div className='post_block'>{posts && <List message={message} data={posts} />}</div>;
    }
  };

  return (
    <div>
      <h1>Postovi</h1>
      <SearchBox />
      {rednerList(searchPostsResult)}
    </div>
  );
};

export default Posts;
