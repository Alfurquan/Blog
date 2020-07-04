import React from "react";
import PostCreate from "./containers/PostCreate";
import PostList from "./containers/PostList";

function App() {
  return (
    <div className="container">
      <h1>Create Post</h1>
      <PostCreate />
      <hr />
      <h1>Posts</h1>
      <PostList />
    </div>
  );
}

export default App;
