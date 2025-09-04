"use client";

import React, { createContext, useState, useContext, ReactNode } from "react";

type ContactModalContextType = {
  isOpenContactManagerModal: boolean;
  toggleContactManagerModal: () => void;
};

const ContactModalContext = createContext<ContactModalContextType | undefined>(
  undefined
);

export const ContactModalProvider = ({ children }: { children: ReactNode }) => {
  const [isOpenContactManagerModal, setIsOpenContactManagerModal] =
    useState(false);

  function toggleContactManagerModal() {
    setIsOpenContactManagerModal((open) => !open);
    document.body.classList.toggle("overflow-hidden");
  }

  return (
    <ContactModalContext.Provider
      value={{ isOpenContactManagerModal, toggleContactManagerModal }}
    >
      {children}
    </ContactModalContext.Provider>
  );
};

// Hook to use context
export const useContactModal = () => {
  const context = useContext(ContactModalContext);
  if (!context)
    throw new Error(
      "useContactModal must be used within a ContactModalProvider"
    );
  return context;
};
