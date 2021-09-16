import { createContext, useReducer } from "react";
import { PostState, initialPostState, postInterface } from "./postState";
import { postReducer } from "./postReducer";
import { PostActionTypes } from "./postActions";
import { fectAllData } from "../../services/dataFetch";
import { userInterface } from "../user/userState";
import { commentInterface } from "../comment/commentState";

export const PostContext = createContext<PostState>(initialPostState);

// interface postsWithRelationsInterface {
//   userId: number;
//   id: number;
//   title: string;
//   body: string;
//   user: userInterface;
// }

export const PostProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(postReducer, initialPostState);

  // Action Generator
  const getPosts = async () => {
    try {
      const [resPosts, resUsers, resComments] = await fectAllData();
      // const [resPosts, resUsers, resComments] = res;
      const { data: posts } = resPosts;
      const { data: users } = resUsers;
      const { data: comments } = resComments;

      const postsWithRelations = posts.map((post: postInterface) => {
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

  const { posts, loading } = state;

  return <PostContext.Provider value={{ posts, loading, getPosts }}>{children}</PostContext.Provider>;
};
