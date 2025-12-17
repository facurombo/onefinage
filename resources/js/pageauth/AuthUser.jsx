import React from "react";

const AuthUser = () => {
  const getToken = () => {
    const tokenString = sessionStorage.getItem("token");
    return tokenString ? JSON.parse(tokenString) : null;
  };

  const getUser = () => {
    const userString = sessionStorage.getItem("user");
    return userString ? JSON.parse(userString) : null;
  };

  const getRole = () => {
    const roleString = sessionStorage.getItem("role");
    return roleString ? JSON.parse(roleString) : null;
  };

  const [token, setToken] = React.useState(getToken());
  const [user, setUser] = React.useState(getUser());
  const [role, setRole] = React.useState(getRole());

  const saveToken = (user, token, role) => {
    sessionStorage.setItem("user", JSON.stringify(user));
    sessionStorage.setItem("token", JSON.stringify(token));
    sessionStorage.setItem("role", JSON.stringify(role));

    setUser(user);
    setToken(token);
    setRole(role);
  };

  const logout = () => {
    sessionStorage.clear();
    setUser(null);
    setToken(null);
    setRole(null);
  };

  return {
    setToken: saveToken,
    token,
    user,
    role,
    getToken,
    getRole,
    getUser,
    logout,
  };
};

export default AuthUser;
