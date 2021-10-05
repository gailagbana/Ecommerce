import React from "react";

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  userDetail: (user) => {},
  logout: () => {},
});

export default AuthContext;
