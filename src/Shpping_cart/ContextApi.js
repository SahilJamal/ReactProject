import React, { useState } from "react";
import { createContext } from "react";

export const Container = createContext();

const ContextApi = ({ children }) => {
  const [cart, setCart] = useState([]);

  return (
    <Container.Provider value={{ cart, setCart }}>
      {children}
    </Container.Provider>
  );
};

export default ContextApi;
