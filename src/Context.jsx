import { useState, createContext, useContext } from "react";
const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isSideBarOpen, setIsSidebarOpen] = useState(false);
  const [isSideModalOpen, setIsSideModalOpen] = useState(false);

  const openSideBar = () => {
    setIsSidebarOpen(true);
  };
  const closeSideBar = () => {
    setIsSidebarOpen(false);
  };
  const openModal = () => {
    setIsSideModalOpen(true);
  };
  const closeModal = () => {
    setIsSideModalOpen(false);
  };
  return (
    <AppContext.Provider
      value={{
        isSideBarOpen,
        isSideModalOpen,
        openSideBar,
        closeSideBar,
        openModal,
        closeModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
    return useContext(AppContext);
}