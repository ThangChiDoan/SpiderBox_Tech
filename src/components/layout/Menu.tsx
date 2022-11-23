import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="flex space-x-4 text-white">
      <div>
        <Link to="todo-list">Todo list</Link>
      </div>
      <div>
        <Link to="posts">Posts</Link>
      </div>
      <div>
        <Link to="create-post">Create posts</Link>
      </div>
    </div>
  );
};

export default Menu;
