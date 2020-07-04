import React, { useState } from "react";
import postService from "../services/postService";

const PostCreate = () => {
  const [title, setTitle] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    await postService.createPost(title);

    setTitle("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control"
          />
          <button className="btn btn-primary" style={{ marginTop: "10px" }}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default PostCreate;
