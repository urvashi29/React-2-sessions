import React from "react";

const ProtectedRoutes = ({ children }) => {
  console.log(children);

  const token = localStorage.getItem("token");
  if (!token) {
    return <div>Please login to access this page.</div>;
  }

  return children;
};

export default ProtectedRoutes;
