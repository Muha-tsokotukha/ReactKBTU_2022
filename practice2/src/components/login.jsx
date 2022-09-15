import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "./header";
import { checkPassword } from "../utility/password";

export const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onSubmit = () => {
    const isLogged = checkPassword({ name, password });

    if (isLogged) navigate("/");
    else alert("Incorrect name or password");
  };

  return (
    <div>
      <Header />
      <div className="flex justify-center">
        <form className="grid border border-slate-500 rounded p-5 gap-5 mt-10">
          <h1>Sign In</h1>
          <label className="grid">
            <span className="font-thin">Name</span>
            <input
              onChange={handleChangeName}
              value={name}
              className="border border-gray-500 p-2"
              name="name"
              placeholder="name"
            />
          </label>

          <label className="grid">
            <span className="font-thin">Password</span>
            <input
              onChange={handleChangePassword}
              value={password}
              className="border border-gray-500 p-2"
              name="password"
              type="password"
              placeholder="password"
            />
          </label>

          <button
            type="button"
            onClick={onSubmit}
            className="bg-gray-500 p-2 rounded"
            disabled={!name.length || !password.length ? true : false}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};
