import axios from "axios";
import React, { useEffect, useState } from "react";
import swal from "sweetalert";
import { BsFillPencilFill, BsFillTrashFill } from "react-icons/bs";

function Viewtasks({ userInfo }) {
  const [todos, setTodos] = useState([]);
  const username = userInfo.username;

  useEffect(() => {
    axios.get(`http://localhost:4000/viewtodos/${username}`).then((display) => {
      setTodos(display.data);
    });
  }, [todos]);

  const deleteTask = (event, toDoId) => {
    event.preventDefault();

    swal({
      title: "Are you sure?",
      buttons: ["No", "Yes"],
      dangerMode: true,
    }).then(async function (isConfirm) {
      if (isConfirm) {
        const display = await axios.delete(
          `http://localhost:4000/deletetodo/${toDoId}`
        );

        if (display.data === "Deleted!") {
          swal({
            title: "Deleted",
            icon: "success",
            buttons: false,
            timer: 1000,
          });
        }
      }
    });
  };

  return (
    <div className="mt-4 mx-auto" style={{ width: "98%" }}>
      <h3 className="">Tasks</h3>
      <table className="table table-bordered table-hover">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Category</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((t) => (
            <tr key={t._id}>
              <td>{t.title}</td>
              <td>{t.description}</td>
              <td>{t.category}</td>
              <td>{t.status}</td>
              <td>
                <a href={`/updatetask/${t._id}`}>
                  <BsFillPencilFill />
                </a>{" "}
                <a href="" onClick={(event) => deleteTask(event, t._id)}>
                  <BsFillTrashFill />
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Viewtasks;
