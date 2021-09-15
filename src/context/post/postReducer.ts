import { PostAction, PostActionTypes } from "./postActions";
import { PostState } from "./postState";

export const postReducer = (state: PostState, action: PostAction) => {
  switch (action.type) {
    case PostActionTypes.GET_POSTS:
      return {
        ...state,
        posts: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
