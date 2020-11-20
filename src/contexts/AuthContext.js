import React, { createContext, useContext, useEffect, useState } from "react";

import { auth, db } from "../services/firebase";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [activities, setActivities] = useState([]);
  const [loadingUser, setLoadingUser] = useState(true);

  function login(email, password) {
    return auth
      .signInWithEmailAndPassword(email, password)
      .catch(function (error) {
        const errorCode = error.code;
        return errorCode;
      });
  }

  function logout() {
    return auth.signOut();
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      (async () => {
        if (user) {
          setLoadingUser(true);
          const doc = await db.collection("users").doc(user.uid).get();

          const data = doc.data();

          const type = data.type;
          const subjects = data.subjects;

          user.type = type;
          user.subjects = subjects;

          const response = await db.collection("activities").get();

          setActivities(
            response.docs.map((doc) => {
              const data = doc.data();
              return {
                ...data,
                date: data.date.seconds,
                id: doc.id,
              };
            })
          );
        }

        setCurrentUser(user);
        setLoadingUser(false);
      })();
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    login,
    logout,
    activities,
    setActivities,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loadingUser && children}
    </AuthContext.Provider>
  );
}
