import { createContext, useState } from "react";

export const UserContext = createContext({
  isUser: false,
  onUserAuthenticate: () => {},
  myLanguage: "",
});

export const UserProvider = ({ children }) => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [myLanguage, setMyLanguage] = useState("");

  const authenticateHandle = () => {
    setIsUserLoggedIn(true);
  };

  const contextValue = {
    isUser: isUserLoggedIn,
    onUserAuthenticate: authenticateHandle,
    myLanguage: myLanguage,
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};
