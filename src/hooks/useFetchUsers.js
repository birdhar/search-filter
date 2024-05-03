import { useEffect, useState } from "react";

function useFetchUsers(page) {
  const [users, setUsers] = useState([]);
  const fetchData = async (page) => {
    const result = await fetch(`https://reqres.in/api/users?page=${page}`);

    const data = await result.json();

    return data;
  };

  useEffect(() => {
    fetchData(page).then((res) => {
      setUsers(res.data);
    });
  }, [page]);
  return users;
}

export default useFetchUsers;
