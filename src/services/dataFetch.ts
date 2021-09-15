// export const fetchAllData = async (url: string) => {
//   url = "https://jsonplaceholder.typicode.com/posts";
//   try {
//     const response = await fetch(url);
//     const responseJson = await response.json();
//     console.log("response lagani responseJson", responseJson);
//     return responseJson;
//   } catch (error) {
//     //// hmmm
//     console.log("lagani error", error);
//   }
// };

// export const fetchAllData = (url: string) => {
//   url = "https://jsonplaceholder.typicode.com/posts";

//   return async () => {
//     try {
//       const response = await fetch(url);
//       const responseJson = await response.json();
//       console.log("response lagani", responseJson);
//       return responseJson;
//     } catch (error) {
//       //// hmmm
//       console.log("lagani error", error);
//     }
//   };
// };

export const fetchAllData = (url: string) => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((json) => {
      console.log("k", json[0]);
      return json;
    })
    .catch((error) => console.log("error", error));
};

// export function fectAllData() {
//   return axios.all([axios.get("/api/v1/reports"), axios.get("/api/v1/reports/deleted")]);
// }
