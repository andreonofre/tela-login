import { createContext, useEffect, useState } from "react";
import { json } from "react-router-dom";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();

  useEffect(() => {
    const userToken = localStorage.getItem("user_token");
    const usersStorage = localStorage.getItem("users_bd");

    if (userToken && usersStorage) {
      const hasUser = JSON.parse(usersStorage)?.filter(
        (user) => user.email === JSON.parse(userToken).email
      );

      if (hasUser) {
        setUser(hasUser[0]);
      };
    };
  }, []);

  return <AuthContext.Provider> {children} </AuthContext.Provider>;
};
