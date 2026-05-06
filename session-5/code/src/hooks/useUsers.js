import React, { useEffect, useState } from "react";
import { getUsers } from "../api/userApi";

// custom hook
const useUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUsers()
      .then((res) => {
        setUsers(res.data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { users, loading };
};

export default useUsers;

// const useFetch = () => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     getData()
//       .then((res) => {
//         setData(res.data);
//       })
//       .finally(() => {
//         setLoading(false);
//       });
//   }, []);

//   return { data, loading };
// };

// export default useFetch;
