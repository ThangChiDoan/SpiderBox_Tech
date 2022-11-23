import { UserRequest } from "api/users";
import React from "react";
import UserProfileCard from "./UserProfileCard";

interface UserProfileListProps {
  data: UserRequest[];
}

export const UserProfileList: React.FC<UserProfileListProps> = ({ data }) => {
  return (
    <div className="grid grid-cols-4 gap-3">
      {data.map((user: UserRequest) => (
        <UserProfileCard user={user} />
      ))}
    </div>
  );
};
