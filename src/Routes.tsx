import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router";
import { Login, Redirection, Landing } from "./components/all-components";
import { UserContext } from "./Context";

const Routes: React.FC = () => {
  let User = useContext(UserContext);
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/redirect" component={Redirection} />
      {!User.isLoggedIn && <Redirect push to="/login" />}
      <Route exact path="/" component={Landing} />
    </Switch>
  );
};

export default Routes;
