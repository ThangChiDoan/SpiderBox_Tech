import { makeObservable, observable, computed } from "mobx";
import { ITodo } from "./todoStore";

export interface ITodoList {
  todos: ITodo[];
  unfinishedTodoCount: number;
}

export class TodoList implements ITodoList {
  todos: ITodo[] = [];

  get unfinishedTodoCount(): number {
    return this.todos.filter((todo: ITodo) => !todo.finished).length;
  }

  constructor(todos: ITodo[]) {
    makeObservable(this, {
      todos: observable,
      unfinishedTodoCount: computed,
    });

    this.todos = todos;
  }
}
