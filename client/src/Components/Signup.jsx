import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

function Signup() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const signUp = async (event) => {
    event.preventDefault();
    if (username && password) {
      const display = await axios.post("http://localhost:4000/signup", {
        username,
        password,
      });
      console.log(display.data);
      if (username === display.data.username) {
        navigate("/signin");
        swal({
          title: "Success",
          icon: "success",
          timer: 1000,
          buttons: false,
        });
      } else if (display.data === "Username already exists") {
        document.getElementById("dispError").innerHTML =
          "Username already exists!";
      }
    } else {
      document.getElementById("dispError").innerHTML =
        "All input fields are required!";
    }
  };

  return (
    <div className="w-50 mx-auto mt-3">
      <h1>Sign up</h1>
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
        <button type="submit" className="btn btn-dark" onClick={signUp}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Signup;
