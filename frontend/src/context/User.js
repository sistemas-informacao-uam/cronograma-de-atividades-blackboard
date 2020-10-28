import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export default function UserProvider({children}) {
  const [user, setUser] = useState({ name: '', type: '', subjects: []});

  return (
    <UserContext.Provider 
      value={{
        user, 
        setUser,
      }}
    >  
      {children}
    </UserContext.Provider>
  )
}

export function useUser() {
  const context = useContext(UserContext);
  const { user, setUser } = context;
  return { user, setUser };
}