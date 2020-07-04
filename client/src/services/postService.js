import http from "./httpService";
import { postServiceApiUrl, queryServiceApiUrl } from "../config/default.json";

const createPost = (title) => http.post(postServiceApiUrl, { title });

const getPosts = () => http.get(queryServiceApiUrl);

export default {
  createPost,
  getPosts,
};
