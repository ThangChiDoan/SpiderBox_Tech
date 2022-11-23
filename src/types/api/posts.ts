import { IErrorResponse } from "types/common";
export interface IPostRequest {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface IPostRequestList {
  posts: IPostRequest[];
}

export type TPostRequest = IPostRequest[] | IErrorResponse;
