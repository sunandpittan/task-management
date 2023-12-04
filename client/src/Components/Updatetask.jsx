import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import swal from "sweetalert";

function Updatetask() {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    axios.get(`http://localhost:4000/viewtodo/${id}`).then((display) => {
      setTitle(display.data.title);
      setDescription(display.data.description);
      setCategory(display.data.category);
      setStatus(display.data.status);
    });
  }, []);

  const navigate = useNavigate();

  const updateTask = async (event) => {
    event.preventDefault();
    const display = await axios.put(`http://localhost:4000/updatetodo/${id}`, {
      title,
      description,
      category,
      status,
    });

    if (title === display.data.title) {
      navigate("/tasks");
      swal({
        title: "Updated",
        icon: "success",
        timer: 1000,
        buttons: false,
      });
    }
  };

  return (
    <div className="mx-auto mt-3 p-3 border rounded" style={{ width: "98%" }}>
      <form className="">
        <h3>Update a task</h3>

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
        <button type="submit" className="btn btn-dark" onClick={updateTask}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Updatetask;
