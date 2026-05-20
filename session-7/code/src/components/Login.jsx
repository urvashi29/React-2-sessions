import React from "react";
import { useNavigate } from "react-router-dom";
import {login} from "../services/authServices";

const Login = () => {
  const [form, setForm] = React.useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await login(form.username, form.password);
      console.log(res);
      localStorage.setItem("token", res.token);
    } catch (err) {
      console.log(err);
    }
    navigate("/notes");
  };

  return (
    <>
      <h2>Login</h2>
      <input
        type="username"
        onChange={(e) => setForm({ ...form, username: e.target.value })}
        placeholder="Please enter Username..."
      />
      <input
        type="password"
        onChange={(e) => setForm({ ...form, password: e.target.value })}
        placeholder="Please enter Password..."
      />
      <button onClick={handleLogin}>Login</button>
    </>
  );
};

export default Login;
