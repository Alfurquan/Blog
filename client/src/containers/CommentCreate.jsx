import React, { useState } from "react";
import commentService from "../services/commentService";

const CommentCreate = ({ postId }) => {
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    await commentService.createComment(postId, content);

    setContent("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>New comment</label>
          <input
            type="text"
            value={content}
            onChange={(e) => setContent(e.target.value)}
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

export default CommentCreate;
