import { CloseModalIcon } from "icons/CloseModalIcon";
import { observer } from "mobx-react-lite";
import { IDeleteModal } from "pages/Home";
import React from "react";
import AlternativeButton from "../button/AlternativeButton";
import RedButton from "../button/RedButton";
import SVGButton from "../button/SVGButton";

interface DeleteModalProps {
  data: IDeleteModal;
}

export const DeleteModal: React.FC<DeleteModalProps> = observer(({ data }) => {
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
                <svg
                  aria-hidden="true"
                  className="mx-auto mb-4 w-14 h-14 text-gray-400 dark:text-gray-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                  Are you sure you want to delete this product?
                </h3>
                <RedButton content="Yes, I'm sure" />
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
