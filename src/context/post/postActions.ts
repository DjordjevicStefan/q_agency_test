import { postInterface } from "./postState";

export enum PostActionTypes {
  GET_POST = "GET_POST",
  // CLEAR_POST = "CLEAR_POST",
  GET_POSTS = "GET_POSTS",
  SEARCH_POSTS = "SEARCH_POSTS",
  SET_ERROR = "SET_ERROR",
  SEARCHBOX_CLEANUP = "SEARCHBOX_CLEANUP",
}

export type PostAction =
  | { type: PostActionTypes.GET_POST; payload: postInterface }
  // | { type: PostActionTypes.CLEAR_POST; payload: undefined }
  | { type: PostActionTypes.SEARCH_POSTS; payload: postInterface[] }
  | { type: PostActionTypes.SET_ERROR; payload: string }
  | { type: PostActionTypes.SEARCHBOX_CLEANUP; payload: [] }
  | { type: PostActionTypes.GET_POSTS; payload: postInterface[] };
