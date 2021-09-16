import axios from "axios";

export const fectAllData = () => {
  return axios.all([
    axios.get("https://jsonplaceholder.typicode.com/posts"),
    axios.get("https://jsonplaceholder.typicode.com/users"),
    axios.get("https://jsonplaceholder.typicode.com/comments"),
  ]);
};
