import axios from "axios";
// import "dotenv/config";

const port = process.env.PORT || 4000;

const url = "http://localhost:${port}/posts";

console.log(`Listening on port ${PORT}`);
console.log(`url ${url}`);

export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);
export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);
export const updatePost = (id, updatedPost) =>
  axios.patch(`${url}/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${url}/${id}`);
