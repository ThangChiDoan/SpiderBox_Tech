import axios from "axios";
import { ICreateUserForm } from "components/users/CreateUserForm";
import { axiosInstance } from "configs/axios";
import { UserRequest } from "types/api/users";
import { Type } from "typescript";

export interface IPatchUsersRequest extends ICreateUserForm {
  id: number | undefined;
}

export const getUsersRequest = async (): Promise<UserRequest[]> =>
  await axios
    .get("http://localhost:4000/users?_start=0&_end=20&_sort=id&_order=desc")
    .then((res) => res.data);

export const postUsersRequest = async (
  params: ICreateUserForm
): Promise<Type> =>
  await axiosInstance.post("/users", params).then(({ data }) => data);

export const patchUsersRequest = async (
  params: IPatchUsersRequest
): Promise<Type> => {
  const { id, ...rest } = params;
  return await axiosInstance
    .patch(`/users/${id}`, { ...rest })
    .then(({ data }) => data);
};

export const deleteUsersRequest = async (id: number): Promise<Type> =>
  await axiosInstance.delete(`/users/${id}`).then(({ data }) => data);
