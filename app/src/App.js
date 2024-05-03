import React, { useState } from "react";

// import form from "./components/Login";
// import Login from "./components/Login";
// import store from "./components/store";
import { Sign } from "./components/Sign";
import { Register } from "./components/Register";
import Login from "./components/Login";

const App = () => {
  const [currentForm, setCurrentForm] = useState("Login");

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  return (
    <div>
      {/* <Login /> */}
      {/* <Sign /> */}
      {/* <Register /> */}
      {currentForm === "login" ? (
        <Sign onFormSwitch={toggleForm} />
      ) : (
        <Register onFormSwitch={toggleForm} />
      )}
    </div>
  );
};
export default App;
