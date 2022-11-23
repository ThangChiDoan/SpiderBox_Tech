import { makeObservable, observable, action } from "mobx";

export interface ITodo {
  id: number;
  title: string;
  finished: boolean;
  toggle: () => void;
}

export class Todo implements ITodo {
  id = Math.random();
  title = "";
  finished = false;

  constructor(title: string) {
    makeObservable(this, {
      title: observable,
      finished: observable,
      toggle: action,
    });
    this.title = title;
  }

  toggle() {
    this.finished = !this.finished;
  }
}
