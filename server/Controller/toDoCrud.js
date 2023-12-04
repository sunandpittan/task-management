const todo = require("../toDoSchema");

const createToDo = async (req, res) => {
  const { title, description, category, status, username } = req.body;
  const toDoDetails = await todo.create({
    title,
    description,
    category,
    status,
    username,
  });
  res.json(toDoDetails);
};

const getToDos = async (req, res) => {
  const id = req.params.id;
  const getTds = await todo.find({ username: id });
  res.json(getTds);
};

const getToDo = async (req, res) => {
  const _id = req.params.id;
  const getTd = await todo.findOne({ _id });
  res.json(getTd);
};

const updateToDo = async (req, res) => {
  const { title, description, category, status, username } = req.body;
  const _id = req.params.id;
  const updateToDos = await todo.findByIdAndUpdate(_id, {
    title,
    description,
    category,
    status,
    username,
  });
  res.json(updateToDos);
};

const deleteToDo = async (req, res) => {
  const _id = req.params.id;
  const deleteToDos = await todo.findByIdAndDelete(_id);
  res.json("Deleted!");
};

module.exports = { createToDo, getToDo, getToDos, updateToDo, deleteToDo };
