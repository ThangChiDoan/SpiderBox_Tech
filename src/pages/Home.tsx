// libs
import { useQuery } from "@tanstack/react-query";
import { getUsersRequest } from "api/users";
import { action } from "mobx";
import { observer, useLocalObservable } from "mobx-react-lite";
// components
import Button from "components/common/Button";
import DefaultButton from "components/common/button/DefaultButton";
import Modal from "components/common/Modal";
import { DeleteModal } from "components/common/modal/DeleteModal";
import EditModal from "components/common/modal/EditModal";
import { Layout } from "components/layout/Layout";
import { UserProfileList } from "components/users/UserProfileList";
// types
import { UserRequest } from "types/api/users";
import { HomePageProvider } from "context/pages/HomePageContext";

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

  if (isLoading) {
    return <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24" />;
  }

  if (isError) {
    <h3>{error.message}</h3>;
  }

  return (
    <HomePageProvider value={{ editModal, deleteModal }}>
      <Layout>
        <div className="flex justify-between items-center w-full mb-4">
          <h1 className="font-bold text-2xl">Home page</h1>
          <DefaultButton
            content="Delete"
            onClick={action(() => deleteModal.setIsShowModal())}
          />
          <Button
            content="Create new user"
            onClick={action(() => modal.setIsShowModal())}
          />
        </div>
        <Modal modal={modal} />
        <EditModal data={editModal} />
        <DeleteModal data={deleteModal} />
        <UserProfileList data={data} />
      </Layout>
    </HomePageProvider>
  );
});

export default Home;
