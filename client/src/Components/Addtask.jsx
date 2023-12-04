import axios from "axios";
import React, { useState } from "react";
import swal from "sweetalert";

function Addtask({ userInfo }) {
  const username = userInfo.username;
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState("");

  const addTask = async (event) => {
    event.preventDefault();
    const display = await axios.post("http://localhost:4000/addtodo", {
      title,
      description,
      category,
      status,
      username,
    });

    if (title === display.data.title) {
      swal({
        title: "Added",
        icon: "success",
        timer: 1000,
        buttons: false,
      });
    }
  };

  return (
    <div className="mx-auto mt-3 p-3 border rounded" style={{ width: "98%" }}>
      <form className="">
        <h3>Add a task</h3>

        <div className="mb-2">
          <input
            type="text"
            placeholder="Title"
            className="form-control"
            id="inputTitle"
            value={title}
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
        </div>
        <div className="mb-2">
          <input
            type="text"
            placeholder="Description"
            className="form-control"
            id="inputDescription"
            value={description}
            onChange={(event) => {
              setDescription(event.target.value);
            }}
          />
        </div>
        <div className="mb-2">
          <input
            type="text"
            placeholder="Category"
            className="form-control"
            id="inputCategory"
            value={category}
            onChange={(event) => {
              setCategory(event.target.value);
            }}
          />
        </div>
        <div className="mb-2">
          <input
            type="text"
            placeholder="Status"
            className="form-control"
            id="inputStatus"
            value={status}
            onChange={(event) => {
              setStatus(event.target.value);
            }}
          />
        </div>
        <button type="submit" className="btn btn-dark" onClick={addTask}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Addtask;
