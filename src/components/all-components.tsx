import React, { useEffect, useContext } from "react";
import { LoginWithGoogle } from "../init-realm";
import { UserContext } from "../Context";
import { handleAuthRedirect } from "realm-web";
import { history } from "../App";

export const CustomButtom: React.FC<{
  action: any;
  text: string;
}> = ({ action, text }) => {
  return (
    <button
      style={{
        background: "#7289da",
        border: "none",
        borderRadius: "10px",
        width: "auto",
        height: "auto",
        color: "white",
        fontSize: "24px",
        fontWeight: "bold",
        cursor: "pointer",
        padding: "20px",
      }}
      type="submit"
      className="login"
      onClick={action}
    >
      {text}
    </button>
  );
};

export const Landing: React.FC = () => {
  let User = useContext(UserContext);
  let userName = User.currentUser.profile.firstName;
  return (
    <div>
      <h1 className="landing">Welcome {userName}!</h1>
      <CustomButtom action={User.actions.handleLogout} text="Log Out" />
    </div>
  );
};

export const Redirection: React.FC = () => {
  useEffect(() => {
    handleAuthRedirect();
  }, []);
  return <h1 className="redirection">Signing in... Please Wait</h1>;
};

export const Login: React.FC = React.memo(() => {
  let user = useContext(UserContext);
  let handleLogin = () => LoginWithGoogle(user.actions.setAuthState);

  useEffect(() => {
    if (user.isLoggedIn) {
      history.push("/");
    }
  }, [user.isLoggedIn]);
  return <CustomButtom action={handleLogin} text="Login with Google" />;
});
