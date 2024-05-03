import React, { useState } from "react";

export const Register = (props) => {
  console.log(props.onFormSwitch);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(username);
  };
  return (
    <div className="auth-form-container">
        <h2>Register</h2>
      <form className="register-form" onSubmit={handlesubmit}>
        <label htmlFor="name">full name</label>
        <input value={name} name="name" id="name" placeholder="fullname" />
        <label htmlFor="Username">Username</label>
        <input
          value={username}
          type="text"
          placeholder="Username"
          id="username"
          name="username"
        />
        <label htmlFor="Password">Password</label>
        <input
          value={password}
          type="Password"
          placeholder="Password"
          id="password"
          name="password"
        />
        <button type="submit">Log in</button>
      </form>
      <button className="link-btn" onClick={() => props.onFormSwitch("login")}>
        Already have an account? Login here
      </button>
    </div>
  );
};
