import React from "react";
import { UserRequest } from "types/api/users";
import UserProfileCard from "./UserProfileCard";

interface UserProfileListProps {
  data: UserRequest[];
}

export const UserProfileList: React.FC<UserProfileListProps> = ({ data }) => {
  return (
    <div className="grid grid-cols-4 gap-3">
      {data.map((user: UserRequest) => (
        <UserProfileCard key={user.id} user={user} />
      ))}
    </div>
  );
};
