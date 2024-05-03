import React from "react";

const store = () => {
  return function myfunc(Event) {
    console.log("fnc started");
    Event.preventDefault();

    var username = document.getElementById("your_name").value;
    var password = document.getElementById("your_Password").value;

    console.log(username);
    console.log(password);

    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
  };
};

export default store;
