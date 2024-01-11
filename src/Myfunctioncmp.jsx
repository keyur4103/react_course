import React, { useState, useEffect } from "react";

export const usercontext = React.createContext();

function Myfunctioncmp() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: 1, name: "abc" });
    }, 3000);
  });
}

export function UserProvider({ children }) {
  const [user, setUser] = useState({ name: "...", id: "..." });

  useEffect(() => {
    Myfunctioncmp().then((userData) => {
      setUser(userData);
    });
  }, []);

  return <usercontext.Provider value={user}>{children}</usercontext.Provider>;
}
