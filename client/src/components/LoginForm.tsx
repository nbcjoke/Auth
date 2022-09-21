import { observer } from "mobx-react-lite";
import React, { FC, useContext, useState } from "react";
import { Context } from "../index";

const LoginForm: FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const { store } = useContext(Context);

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        value={email}
      />
      <input
        type="text"
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        value={password}
      />
      <button onClick={() => store.login(email, password)}>login</button>
      <button onClick={(e) => store.registration(email, password)}>
        registration
      </button>
    </div>
  );
};

export default observer(LoginForm);
