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
}

export const initialPostState: PostState = {
  posts: [],
  loading: true,
  getPosts: () => {},
};
