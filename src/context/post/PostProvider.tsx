import { createContext, useReducer } from "react";
import { PostState, initialPostState, postInterface } from "./postState";
import { postReducer } from "./postReducer";
import { PostActionTypes } from "./postActions";
import { fectAllData, fetchPost, fetchUserByPostUserId } from "../../services/post";
import { userInterface } from "../user/userState";
import { commentInterface } from "../comment/commentState";

export const PostContext = createContext<PostState>(initialPostState);

export const PostProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(postReducer, initialPostState);

  // Action Generators
  const getPosts = async () => {
    //// don't call API if it is already loaded
    if (state.posts?.length !== 0) {
      return;
    }

    try {
      const [resPosts, resUsers, resComments] = await fectAllData();
      // const [resPosts, resUsers, resComments] = res;
      const { data: posts } = resPosts;
      const { data: users } = resUsers;
      const { data: comments } = resComments;

      const postsWithRelations: postInterface[] = posts.map((post: postInterface): postInterface => {
        return {
          ...post,
          user: users.find((user: userInterface) => {
            return post.userId === user.id;
          }),
          comments: comments.filter((comment: commentInterface) => {
            return post.id === comment.postId;
          }),
        };
      });

      dispatch({
        type: PostActionTypes.GET_POSTS,
        payload: postsWithRelations,
      });
    } catch (error) {
      console.log("error", error);
    }
  };

  const getPostById = async (postId: number) => {
    //// don't call API if it is already loaded
    if (state.post?.id === postId) {
      return;
    }

    try {
      const { data: post } = await fetchPost(postId);
      const { data: user } = await fetchUserByPostUserId(post.userId);

      const postWithUser: postInterface = { ...post, user };

      dispatch({
        type: PostActionTypes.GET_POST,
        payload: postWithUser,
      });
    } catch (error) {
      console.log("error", error);
    }
  };

  const { posts, post } = state;

  return <PostContext.Provider value={{ posts, post, getPosts, getPostById }}>{children}</PostContext.Provider>;
};
