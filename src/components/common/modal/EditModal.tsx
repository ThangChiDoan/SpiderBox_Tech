import ButtonSubmit from "components/form/ButtonSubmit";
import EditUserForm from "components/users/EditUserForm";
import { CloseModalIcon } from "icons/CloseModalIcon";
import { observer } from "mobx-react-lite";
import { IModal } from "pages/Home";
import React from "react";
import { useNavigate } from "react-router-dom";
import AlternativeButton from "../button/AlternativeButton";
import SVGButton from "../button/SVGButton";

interface EditModalProps {
  data: IModal;
}

const EditModal: React.FC<EditModalProps> = observer(({ data }) => {
  const navigate = useNavigate();

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
                  Edit user information
                </h3>
                <SVGButton onClick={data.setIsShowModal}>
                  <CloseModalIcon />
                </SVGButton>
              </div>

              <div className="px-6 pt-2 pb-6">
                <EditUserForm />
              </div>

              {/* TODO: submit button */}
              <div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
                <ButtonSubmit content="Edit" form="edit-user-form" />
                <AlternativeButton
                  content="Close"
                  onClick={() => {
                    data.setIsShowModal();
                    navigate("/");
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
});

export default EditModal;
