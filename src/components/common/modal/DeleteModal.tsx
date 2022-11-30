import { useMutation, useQuery } from "@tanstack/react-query";
import { deleteUsersRequest, getUsersRequest } from "api/users";
import { useHomePageStore } from "context/pages/HomePageContext";
import { CloseModalIcon } from "icons/CloseModalIcon";
import DeleteModalIcon from "icons/DeleteModalIcon";
import { observer } from "mobx-react-lite";
import { IDeleteModal } from "pages/Home";
import React from "react";
import { toast } from "react-toastify";
import { UserRequest } from "types/api/users";
import AlternativeButton from "../button/AlternativeButton";
import RedButton from "../button/RedButton";
import SVGButton from "../button/SVGButton";

interface DeleteModalProps {
  data: IDeleteModal;
}

export const DeleteModal: React.FC<DeleteModalProps> = observer(({ data }) => {
  const { userSelected } = useHomePageStore();

  const { refetch } = useQuery<UserRequest[], Error>({
    queryKey: ["users"],
    queryFn: getUsersRequest,
  });

  const { mutate } = useMutation({
    mutationFn: deleteUsersRequest,
    onSuccess: () => {
      toast.success("Delete success!");
      refetch();
    },
    onError: () => {
      toast.error("Delete fail!");
      refetch();
    },
  });

  return (
    <>
      {data?.isShowModal && (
        <div
          id="popup-modal"
          tabIndex={-1}
          className="bg-gray-800/90 flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
        >
          <div className="relative w-full max-w-md h-full md:h-auto">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <SVGButton onClick={data.setIsShowModal}>
                <CloseModalIcon />
              </SVGButton>
              <div className="p-6 text-center">
                <DeleteModalIcon />
                <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                  Are you sure you want to delete user{" "}
                  {`${userSelected.first_name}`}?
                </h3>
                <RedButton
                  content="Yes, I'm sure"
                  onClick={() => {
                    mutate(userSelected.id!);
                    data?.setIsShowModal();
                  }}
                />
                <AlternativeButton
                  content="No, cancel"
                  onClick={data?.setIsShowModal}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
});
