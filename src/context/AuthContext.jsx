import React, { createContext, useContext, useState } from "react";

// Create context
export const authDataContext = createContext();

const AuthContext = ({ children }) => {
  const [serverUrl] = useState("http://localhost:4000"); // example URL

  const userValue = {
    serverUrl,
  };

  return (
    <authDataContext.Provider value={userValue}>
      {children}
    </authDataContext.Provider>
  );
};

export default AuthContext;
