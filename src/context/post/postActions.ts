import { postInterface } from "./postState";

export enum PostActionTypes {
  GET_POST = "GET_POST",
  GET_POSTS = "GET_POSTS",
}

export type PostAction =
  | { type: PostActionTypes.GET_POST; payload: postInterface }
  | { type: PostActionTypes.GET_POSTS; payload: postInterface[] };
// | { type: PostContextActionKind.SET_LOADING };
