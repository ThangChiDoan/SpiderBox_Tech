import axios from "axios";
import { ICreateUserForm } from "components/posts/CreateUserForm";
import { axiosInstance } from "configs/axios";
import { UserRequest } from "types/api/users";

export const getUsersRequest = async (): Promise<UserRequest[]> =>
  await axios
    .get("http://localhost:4000/users?_start=0&_end=20")
    .then((res) => res.data);

export const postUsersRequest = async (params: ICreateUserForm): Promise<any> =>
  await axiosInstance.post("/users", params).then((res) => res.data);
