import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/auth";
import Image from "next/image";

import styles from "./UserMenu.module.scss";

const UserMenu = () => {
  const { user, login, logout } = useAuth();
  const [ava, setAva] = useState(null);

  useEffect(() => {
    if (user) {
      setAva(user.photoURL);
      console.log(user.photoURL);
    }
  }, [user]);

  return (
    <div>
      {user && (
        <div className={`${styles.user_data_wrapper}`}>
          <span>{user.email}</span>
          <div className={`${styles.user_log_wrapper}`}>
            {ava && <Image src={ava} width={50} height={50} alt="ava" />}
            {!ava && "no avatar"}

            <button type="button" name="logout" onClick={logout}>
              Logout
            </button>
          </div>
        </div>
      )}
      {!user && (
        <div className={`${styles.user_log_wrapper}`}>
          <button type="button" name="login" onClick={login}>
            Login
          </button>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
