const express = require("express");
const router = express.Router();
const signIn = require("../Controller/signIn");
const signUp = require("../Controller/signUp");
const toDoCrud = require("../Controller/toDoCrud");

router.post("/signin", signIn);
router.post("/signup", signUp);

router.route("/addtodo").post(toDoCrud.createToDo);
router.route("/viewtodo/:id").get(toDoCrud.getToDo);
router.route("/viewtodos/:id").get(toDoCrud.getToDos);
router.route("/updatetodo/:id").put(toDoCrud.updateToDo);
router.route("/deletetodo/:id").delete(toDoCrud.deleteToDo);

module.exports = router;
