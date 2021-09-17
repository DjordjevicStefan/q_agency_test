import { userInterface } from "../user/userState";
import { commentInterface } from "../comment/commentState";

export interface PostState {
  posts: postInterface[];
  searchPostsResult: postInterface[];
  post: postInterface | undefined;
  errorMsg: string;
  getPosts: () => void;
  getPostById: (postId: number) => void;
  searchPostsByUserData: (searchTerm: string) => void;
  searchBoxCleanup: () => void;
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
  searchPostsResult: [],
  post: undefined,
  errorMsg: "",
  getPosts: () => {},
  getPostById: () => {},
  searchPostsByUserData: () => {},
  searchBoxCleanup: () => {},
};
