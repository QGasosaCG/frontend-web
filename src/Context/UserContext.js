import React, { createContext, useState } from "react";

export const UserContext = createContext({});

export function UserProvider(props) {
  const [addUser, setAddUser] = useState(false);

  const [main, setMain] = useState("user");

  return (
    <UserContext.Provider value={{ addUser, setAddUser, main, setMain }}>
      {props.children}
    </UserContext.Provider>
  );
}
