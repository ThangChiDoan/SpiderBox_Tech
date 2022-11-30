// libs
import { useQuery } from "@tanstack/react-query";
import { getUsersRequest } from "api/users";
import { action } from "mobx";
import { observer, useLocalObservable } from "mobx-react-lite";
// components
import Button from "components/common/Button";
import Modal from "components/common/Modal";
import { Layout } from "components/layout/Layout";
import { UserProfileList } from "components/users/UserProfileList";
// types
import { UserRequest } from "types/api/users";
import EditModal from "components/common/modal/EditModal";
import { DeleteModal } from "components/common/modal/DeleteModal";
import { HomePageProvider } from "context/pages/HomePageContext";
import { useState } from "react";
import Select from "react-tailwindcss-select";

export interface IModal {
  isShowModal: boolean;
  setIsShowModal(): void;
}

export interface IDeleteModal extends IModal {}

export interface IEditModal extends IModal {}

const Home = observer(() => {
  const {
    isLoading,
    data = [],
    isError,
    error,
  } = useQuery<UserRequest[], Error>({
    queryKey: ["users"],
    queryFn: getUsersRequest,
  });

  const modal: IModal = useLocalObservable(() => ({
    isShowModal: false as boolean,
    setIsShowModal() {
      this.isShowModal = !!!this.isShowModal;
    },
  }));

  const editModal: IEditModal = useLocalObservable(() => ({
    isShowModal: false as boolean,
    setIsShowModal() {
      this.isShowModal = !!!this.isShowModal;
    },
  }));

  const deleteModal: IDeleteModal = useLocalObservable(() => ({
    isShowModal: false as boolean,
    setIsShowModal() {
      this.isShowModal = !!!this.isShowModal;
    },
  }));

  const [userSelected, setUserSelected] = useState<Partial<UserRequest>>({});

  const options = [
    { value: "fox", label: "🦊 Fox" },
    { value: "butterfly", label: "🦋 Butterfly" },
    { value: "honeybee", label: "🐝 Honeybee" },
  ];

  interface Option {
    value: string;
    label: string;
    disabled?: boolean;
    isSelected?: boolean;
  }

  const [animal, setAnimal] = useState<Option | Option[] | null>(null);

  const handleChange = (value: Option | Option[] | null) => {
    setAnimal(value);
  };

  if (isLoading) {
    return <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24" />;
  }

  if (isError) {
    <h3>{error.message}</h3>;
  }

  return (
    <HomePageProvider
      value={{ editModal, deleteModal, userSelected, setUserSelected }}
    >
      <Layout>
        <div className="flex justify-between items-center w-full mb-4">
          <h1 className="font-bold text-2xl">Home page</h1>
          <div className="flex gap-4">
            <Select
              primaryColor="black"
              value={animal}
              onChange={(value) => handleChange(value!)}
              options={options}
            />
            <Button
              content="Create new user"
              onClick={action(() => modal.setIsShowModal())}
            />
          </div>
        </div>
        <UserProfileList data={data} />
        <Modal modal={modal} />
        <EditModal data={editModal} />
        <DeleteModal data={deleteModal} />
      </Layout>
    </HomePageProvider>
  );
});

export default Home;
