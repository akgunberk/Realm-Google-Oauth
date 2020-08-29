import React, { useState, useEffect } from "react";
import { UserContext } from "./Context";
import { Application } from "./init-realm";

export function AuthGuard(props: any) {
  const [authState, setAuthState] = useState({
    isLoggedIn: Application.currentUser?.state === "active",
    currentUser: Application.currentUser,
  });
  useEffect(() => {}, [authState.isLoggedIn]);

  const handleLogout = () => {
    Application.currentUser?.logOut();
    setAuthState({ isLoggedIn: false, currentUser: null });
  };

  const authInfo = React.useMemo(() => {
    const { isLoggedIn, currentUser } = authState;
    const value = {
      isLoggedIn,
      currentUser,
      actions: { handleLogout, setAuthState },
    };
    return value;
  }, [authState]);

  return (
    <UserContext.Provider value={authInfo}>
      {props.children}
    </UserContext.Provider>
  );
}
