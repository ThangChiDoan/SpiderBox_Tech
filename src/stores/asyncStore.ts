import { TPostRequest } from "./../types/api/posts";
import { postsRequest } from "api/posts";
import { runInAction, makeAutoObservable, action } from "mobx";

interface IAsyncStore {
  posts: TPostRequest;
  state: string;
}

export class AsyncStore implements IAsyncStore {
  posts: TPostRequest = [];
  state: string = "pending"; // "pending", "done" or "error"

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  async fetchProjects() {
    this.posts = [];
    this.state = "pending";
    try {
      const posts = await postsRequest();
      action(() => {
        this.posts = posts;
        this.state = "done";
      });
    } catch (e) {
      runInAction(() => {
        this.state = "error";
      });
    }
  }
}
