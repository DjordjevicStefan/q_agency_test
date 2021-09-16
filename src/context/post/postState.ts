import { userInterface } from "../user/userState";
import { commentInterface } from "../comment/commentState";

export interface PostState {
  posts: postInterface[] | undefined;
  loading: boolean;
  getPosts: () => void;
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
  loading: true,
  getPosts: () => {},
};
