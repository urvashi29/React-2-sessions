import React from "react";
import { useNavigate } from "react-router-dom";

const Notes = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div>
      Notes
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Notes;
