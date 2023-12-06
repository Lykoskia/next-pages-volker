import React, { createContext, useState, useContext } from 'react';

const SelectedPageContext = createContext();

export const useSelectedPage = () => useContext(SelectedPageContext);

export const SelectedPageProvider = ({ children }) => {
  const [selectedPage, setSelectedPage] = useState(null);
  const [selectedSection, setSelectedSection] = useState(null);

  return (
    <SelectedPageContext.Provider value={{ selectedPage, setSelectedPage, selectedSection, setSelectedSection }}>
      {children}
    </SelectedPageContext.Provider>
  );
};
