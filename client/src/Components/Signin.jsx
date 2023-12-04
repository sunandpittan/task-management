import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signin({ setUserInfo }) {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const signIn = async (event) => {
    event.preventDefault();
    const display = await axios.post("http://localhost:4000/signin", {
      username,
      password,
    });
    if (display.data.message === "Login successful") {
      setUserInfo(display.data);
      navigate("/tasks");
    } else {
      document.getElementById("dispError").innerHTML = "Incorrect password!";
    }
  };

  return (
    <div className="w-50 mx-auto mt-3">
      <h1>Sign in</h1>
      <form className="border border-dark rounded p-3">
        <div className="mb-3">
          <label for="inputUsername" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="inputUsername"
            aria-describedby="usernameHelp"
            placeholder="Enter username"
            value={username}
            onChange={(event) => {
              setUsername(event.target.value);
              document.getElementById("dispError").innerHTML = "";
            }}
          />
        </div>

        <div className="mb-3">
          <label for="inputPassword" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="inputPassword"
            placeholder="Enter password"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
              document.getElementById("dispError").innerHTML = "";
            }}
          />
        </div>
        <p id="dispError" className="text-danger"></p>
        <button type="submit" className="btn btn-dark" onClick={signIn}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Signin;
