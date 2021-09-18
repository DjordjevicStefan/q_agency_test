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

  //// Action Generators
  const getPosts = async () => {
    //// don't call API if it is already loaded
    if (state.posts?.length !== 0) {
      return;
    }

    try {
      const [resPosts, resUsers, resComments] = await fectAllData();

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
      dispatch({
        type: PostActionTypes.SET_ERROR,
        payload: "error msg from API backend",
      });
    }
  };

  const getPostById = async (postId: number) => {
    //// don't call API if it is already loaded
    if (state.post?.id === postId) {
      return;
    }

    const post = state.posts?.find((post) => {
      return post.id === postId;
    });

    if (post) {
      dispatch({
        type: PostActionTypes.GET_POST,
        payload: { ...post },
      });
    } else {
      try {
        const { data: post } = await fetchPost(postId);
        const { data: user } = await fetchUserByPostUserId(post.userId);

        const postWithUser: postInterface = { ...post, user };

        dispatch({
          type: PostActionTypes.GET_POST,
          payload: postWithUser,
        });
      } catch (error) {
        dispatch({
          type: PostActionTypes.SET_ERROR,
          payload: "error msg from API backend",
        });
      }
    }
  };

  //// search function
  const searchPostsByUserData = (searchTerm: string) => {
    const { posts } = state;

    if (posts) {
      const searchedPosts = posts.filter((post: postInterface) => {
        return post.user?.["name"].toLowerCase().includes(searchTerm.toLowerCase());
      });

      dispatch({
        type: PostActionTypes.SEARCH_POSTS,
        payload: searchedPosts,
      });
    }
  };

  const searchBoxCleanup = () => {
    dispatch({
      type: PostActionTypes.SEARCHBOX_CLEANUP,
      payload: [],
    });
  };

  const { posts, post, searchPostsResult, errorMsg } = state;

  return (
    <PostContext.Provider
      value={{
        posts,
        post,
        searchPostsResult,
        errorMsg,
        getPosts,
        getPostById,
        searchPostsByUserData,
        searchBoxCleanup,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};
