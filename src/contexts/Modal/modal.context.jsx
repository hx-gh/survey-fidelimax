'use client'
import React, { createContext, useContext, useState } from 'react';

//Context
const ModalContext = createContext({});
//Provider
const ModalProvider = ({ children }) => {
  const [modalState, setState] = useState({ visible: 'none' });
  const openModal = (payload) => setState({ ...payload, visible: 'block' });
  const closeModal = (payload) => setState({ ...payload, visible: 'none' });
  return <ModalContext.Provider value={{ modalState, openModal, closeModal }}>{children}</ModalContext.Provider>;
};
//Hook
const useModalContext = () => {
  const context = useContext(ModalContext);
  return context;
};

export { useModalContext, ModalProvider };
