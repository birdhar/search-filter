import React from "react";
import style from "./Users.module.css";

function User({ user }) {
  return (
    <div className={style.user}>
      <img
        src={user?.avatar}
        alt={user?.first_name}
        className={style.userimg}
      />
      <div>
        <p>
          {user?.first_name} {user?.last_name}
        </p>
        <p>{user?.email}</p>
      </div>
    </div>
  );
}

export default User;
