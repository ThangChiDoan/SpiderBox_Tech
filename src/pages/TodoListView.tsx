import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";
import { ITodoList } from "../stores";
import TodoView from "./TodoView";

export interface ITodoListView {
  todoList: ITodoList;
}

const TodoListView = observer(({ todoList }: ITodoListView) => {
  return (
    <div>
      <div>
        <h1>This is the Todo List page</h1>
        <Link to="/">Home</Link>
      </div>
      <ul>
        {todoList.todos.map((todo) => (
          <TodoView todo={todo} key={todo.id} />
        ))}
      </ul>
      Tasks left: {todoList?.unfinishedTodoCount}
    </div>
  );
});
export default TodoListView;
