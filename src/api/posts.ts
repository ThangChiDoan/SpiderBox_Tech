import { TPostRequest } from "./../types/api/posts";
import axios from "axios";

export const postsRequest = async (): Promise<TPostRequest> => {
  return await axios
    .get("http://localhost:4000/posts")
    .then((res) => {
      return Promise.resolve(res.data);
    })
    .catch((err) => {
      return Promise.reject(err.message);
    });
};
