import http from "./httpService";
import { commentServiceApiUrl } from "../config/default.json";

const createComment = (postId, content) =>
  http.post(commentServiceApiUrl + postId + "/comments", { content });

const getComments = (postId) =>
  http.get(commentServiceApiUrl + postId + "/comments");

export default {
  createComment,
  getComments,
};
