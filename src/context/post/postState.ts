import { userInterface } from "../user/userState";
import { commentInterface } from "../comment/commentState";

export interface PostState {
  posts: postInterface[] | undefined;
  post: postInterface | undefined;
  getPosts: () => void;
  getPostById: (postId: number) => void;
}

export interface postInterface {
  userId: number;
  id: number;
  title: string;
  body: string;
  user?: userInterface;
  comments?: commentInterface[];
}

export const initialPostState: PostState = {
  posts: [],
  post: undefined,
  getPosts: () => {},
  getPostById: () => {},
};
