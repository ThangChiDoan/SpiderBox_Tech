import { CloseModalIcon } from "icons/CloseModalIcon";
import { observer } from "mobx-react-lite";
import { IModal } from "pages/Home";
import React from "react";
import SVGButton from "../button/SVGButton";

interface EditModalProps {
  data: IModal;
}

const EditModal: React.FC<EditModalProps> = observer(({ data }) => {
  return (
    <div className="mb-4">
      {data.isShowModal && (
        <div
          id="defaultModal"
          tabIndex={-1}
          aria-hidden="true"
          className="bg-gray-800/90 flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
        >
          <div className="relative w-full max-w-2xl h-full md:h-auto">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <div className="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:">
                  Create a new user
                </h3>
                <SVGButton onClick={data.setIsShowModal}>
                  <CloseModalIcon />
                </SVGButton>
              </div>

              <div className="px-6 pt-2 pb-6">Edit form body</div>

              {/* TODO: submit button */}
              <div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
                <button
                  type="submit"
                  form="create-user-form"
                  className=" bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Create
                </button>
                <button
                  type="button"
                  className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover: dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                  onClick={data.setIsShowModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
});

export default EditModal;
