import React, { useEffect } from "react";
import useUsers from "../hooks/useUsers";

const Users = () => {
  const { users, loading } = useUsers();

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      {users.map((user) => {
        return <p key={user.id}>{user.name}</p>;
      })}
    </div>
  );
};

export default Users;
