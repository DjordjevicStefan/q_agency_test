import axios from "axios";

export const fectAllData = () => {
  return axios.all([
    axios.get("https://jsonplaceholder.typicode.com/posts"),
    axios.get("https://jsonplaceholder.typicode.com/users"),
    axios.get("https://jsonplaceholder.typicode.com/comments"),
  ]);
};

export const fetchPost = (postId: number) => {
  return axios.get("https://jsonplaceholder.typicode.com/posts/" + postId);
};

export const fetchUserByPostUserId = (postUserId: number) => {
  return axios.get("https://jsonplaceholder.typicode.com/users/" + postUserId);
};
