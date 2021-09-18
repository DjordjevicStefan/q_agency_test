import { PostAction, PostActionTypes } from "./postActions";
import { PostState } from "./postState";

export const postReducer = (state: PostState, action: PostAction) => {
  switch (action.type) {
    case PostActionTypes.GET_POSTS:
      return {
        ...state,
        posts: action.payload,
      };
    case PostActionTypes.GET_POST:
      return {
        ...state,
        post: action.payload,
      };
    case PostActionTypes.SEARCH_POSTS:
      return {
        ...state,
        searchPostsResult: action.payload,
      };
    case PostActionTypes.SET_ERROR:
      return {
        ...state,
        errorMsg: action.payload,
      };
    case PostActionTypes.SEARCHBOX_CLEANUP:
      return {
        ...state,
        searchPostsResult: action.payload,
      };
    default:
      return state;
  }
};
