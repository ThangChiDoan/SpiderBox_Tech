import { observer } from "mobx-react-lite";
import React from "react";
import { ITodo } from "../stores";

export interface ITodoView {
  todo: ITodo;
}

const TodoView = observer(({ todo }: ITodoView) => (
  <li>
    <input
      type="checkbox"
      checked={todo.finished}
      onClick={() => todo.toggle()}
    />
    {todo.title}
  </li>
));

export default TodoView;
