import { useEffect, useState } from "react";
import style from "./Users.module.css";
import User from "./User";
import useDounce from "../hooks/useDounce";
import useFetchUsers from "../hooks/useFetchUsers";

function Users() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const debouncedVal = useDounce(search);
  const userss = useFetchUsers(page);

  useEffect(() => {
    if (userss?.length) {
      setUsers(userss);
    }
  }, [userss]);

  const handlePrev = () => {
    setPage(page - 1);
  };
  const handleNxt = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    const filterdUsers = userss?.filter((user) => {
      return user?.first_name?.toLowerCase().includes(search?.toLowerCase());
    });
    setUsers(filterdUsers);
  }, [debouncedVal]);

  return (
    <div className={style.userscontainer}>
      <h2>User Info</h2>

      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className={style.userlist}>
        {users?.map((user, index) => (
          <User user={user} key={index} />
        ))}
      </div>

      <div className={style.buttons}>
        <button
          className={style.prevbtn}
          onClick={handlePrev}
          disabled={page <= 1}
        >
          Prev
        </button>
        <button
          className={`${style.nextbtn}`}
          onClick={handleNxt}
          disabled={page >= 2}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Users;
