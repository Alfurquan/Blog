import React, { useState, useEffect } from "react";
import postService from "../services/postService";
import CommentCreate from "./CommentCreate";
import CommentList from "./CommentList";

const PostList = () => {
  const [posts, setPosts] = useState({});

  const fetchPosts = async () => {
    const response = await postService.getPosts();
    setPosts(response.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const renderedPosts = Object.values(posts);

  return (
    <div className="d-flex flex-row flex-wrap justify-content-between">
      {renderedPosts.map((post) => (
        <div
          className="card"
          key={post.id}
          style={{ width: "30%", marginBottom: "10px" }}
        >
          <div className="card-body">
            <h3>{post.title}</h3>
            <CommentList comments={post.comments} />
            <CommentCreate postId={post.id} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostList;
