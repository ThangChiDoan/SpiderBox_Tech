import { IModal } from "pages/Home";
import { createContext, useContext } from "react";

interface HomePageProviderProps {
  children: JSX.Element | JSX.Element[];
  value: {
    editModal: IEditModal;
    deleteModal: IDeleteModal;
  };
}

export interface IDeleteModal extends IModal {}

export interface IEditModal extends IModal {}

const HomePageStore = createContext(
  {} as {
    editModal: IEditModal;
    deleteModal: IDeleteModal;
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
