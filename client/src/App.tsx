import React, { FC, useContext, useEffect, useState } from "react";
import { Context } from "./index";
import LoginForm from "./components/LoginForm";
import { observer } from "mobx-react-lite";
import { IUser } from "./models/IUser";
import { UserService } from "./services/UserService";

const App: FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const { store } = useContext(Context);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      store.checkAuth();
    }
  }, []);

  async function getUsers() {
    try {
      const response = await UserService.fetchUsers();
      setUsers(response.data);
    } catch (err) {
      console.log(err);
    }
  }

  if (store.isLoading) {
    return <div>Загрузка...</div>;
  }

  if (!store.isAuth) {
    return <LoginForm />;
  }

  return (
    <div>
      <h1>
        {store.isAuth
          ? "Пользователь авторизован"
          : "Пользователь не авторизован"}
      </h1>
      <button onClick={() => store.logout()}>logout</button>
      <button onClick={getUsers}>get users</button>
      <div>
        {users.map((user) => (
          <div key={user.id}>{user.email}</div>
        ))}
      </div>
    </div>
  );
};

export default observer(App);
