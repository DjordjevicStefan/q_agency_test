import { createContext, useReducer } from "react";
import { PostState, initialPostState } from "./postState";
import { postReducer } from "./postReducer";
import { PostActionTypes } from "./postActions";

export const PostContext = createContext<PostState>(initialPostState);

export const PostProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(postReducer, initialPostState);

  // Action Generator
  const getPosts = () => {
    const posts = [
      {
        userId: 12,
        id: 12,
        title: "ddddd",
        body: "ddddd",
      },
      {
        userId: 22,
        id: 22,
        title: "cccccc",
        body: "ccccccc",
      },
    ];

    dispatch({
      type: PostActionTypes.GET_POSTS,
      payload: posts,
    });
  };

  const { posts, loading } = state;
  console.log("jbt jtb", posts);
  return <PostContext.Provider value={{ posts, loading, getPosts }}>{children}</PostContext.Provider>;
};
