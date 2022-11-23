import axios from "axios";

export interface UserRequest {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  image: string;
}

export const getUsersRequest = async (): Promise<UserRequest[]> =>
  await axios
    .get("http://localhost:4000/users?_start=0&_end=20")
    .then((res) => res.data);
