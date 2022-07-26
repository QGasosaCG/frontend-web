import React, { createContext, useState } from "react";

export const UserContext = createContext({});

export function UserProvider(props) {
  const [addUser, setAddUser] = useState(false);
  const [addPosto, setAddPosto] = useState(false);

  const [main, setMain] = useState("user");

  return (
    <UserContext.Provider
      value={{ addUser, setAddUser, main, setMain, addPosto, setAddPosto }}
    >
      {props.children}
    </UserContext.Provider>
  );
}
