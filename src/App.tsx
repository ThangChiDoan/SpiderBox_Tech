import { CreatePosts } from "components/posts/CreatePosts";
import PostsView from "pages/PostsView";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TodoListView from "./pages/TodoListView";
import { TodoList } from "./stores/todoListStore";
import { Todo } from "./stores/todoStore";

const store = new TodoList([
  new Todo("Get Coffee"),
  new Todo("Write simpler code"),
]);

export const App = () => {
  return (
    <div className="App bg-slate-800 font-sans text-white">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="todo-list" element={<TodoListView todoList={store} />} />
        <Route path="posts" element={<PostsView />} />
        <Route path="create-post" element={<CreatePosts />} />
      </Routes>
    </div>
  );
};
