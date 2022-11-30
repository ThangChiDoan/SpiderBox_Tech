import { IModal } from "pages/Home";
import { createContext, Dispatch, SetStateAction, useContext } from "react";
import { UserRequest } from "types/api/users";

interface HomePageProviderProps {
  children: JSX.Element | JSX.Element[];
  value: {
    editModal: IEditModal;
    deleteModal: IDeleteModal;
    userSelected: Partial<UserRequest>;
    setUserSelected: Dispatch<SetStateAction<Partial<UserRequest>>>;
  };
}

export interface IDeleteModal extends IModal {}

export interface IEditModal extends IModal {}

const HomePageStore = createContext(
  {} as {
    editModal: IEditModal;
    deleteModal: IDeleteModal;
    userSelected: Partial<UserRequest>;
    setUserSelected: Dispatch<SetStateAction<Partial<UserRequest>>>;
  }
);

export const HomePageProvider: React.FC<HomePageProviderProps> = ({
  children,
  value,
}) => {
  return (
    <HomePageStore.Provider value={value}>{children}</HomePageStore.Provider>
  );
};

export const useHomePageStore = () => useContext(HomePageStore);
