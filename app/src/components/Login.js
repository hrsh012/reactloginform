import React from "react";
import "./form.css";
import myfunc from "./store";
import { FaUser, FaLock } from "react-icons/fa";

const Login = () => {
  return (
    <div className="wrapper">
      <form onSubmit="myfunc(Event)">
        <h1>Login</h1>
        <div className="input-box">
          <input type="text" placeholder="username" id="your_name" required />
          <FaUser className="icon" />
        </div>
        <div className="input-box">
          <input
            type="Password"
            placeholder="password"
            id="your_Password"
            required
          />
          <FaLock className="icon" />
        </div>
        <div className="remember">
          <label>
            <input type="checkbox" />
            Remember Me
          </label>
          <a href="#">Forgot Password?</a>
        </div>
        <button onClick={myfunc()}>Login</button>
        <div className="register">
          <p>
            Don't Have An Account ? <a href="#">Register</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
