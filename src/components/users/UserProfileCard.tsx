import AlternativeButton from "components/common/button/AlternativeButton";
import DefaultButton from "components/common/button/DefaultButton";
import { useHomePageStore } from "context/pages/HomePageContext";
import { observer } from "mobx-react-lite";
import React from "react";
import { Link } from "react-router-dom";
import { UserRequest } from "types/api/users";

interface UserRequestProps {
  user: UserRequest;
}

const UserProfileCard: React.FC<UserRequestProps> = observer(({ user }) => {
  const { first_name, last_name, email, image } = user;

  const { editModal } = useHomePageStore();

  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
      <div className="flex justify-end px-4 pt-4">
        <div
          id="dropdown"
          className="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700"
        >
          <ul className="py-1" aria-labelledby="dropdownButton">
            <li>
              <Link
                to="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:"
              >
                Edit
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:"
              >
                Export Data
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="block px-4 py-2 text-sm text-blue-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:"
              >
                Delete
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col items-center pb-10">
        <img
          className="w-24 h-24 mb-3 rounded-full shadow-lg"
          src={image}
          alt="user profile"
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:">
          {`${first_name} ${last_name}`}
        </h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {email}
        </span>
        <div className="flex mt-4 space-x-3 md:mt-6">
          <DefaultButton content="Detail" onClick={editModal.setIsShowModal} />
          <AlternativeButton content="Delete" onClick={() => {}} />
        </div>
      </div>
    </div>
  );
});

export default UserProfileCard;
