const express = require("express");
const router = express.Router();

const { adminonly, isuserloggedin } = require("../middlewares/middlewares");
const {
  createtask,
  deleteall,
  deletebyid,
  getalltask,
  getusertask,
  paginatetasks,
  paginateusertask,
  updatetask,
  userdeletebyid,
} = require("../controllers/task/task.controller");

router.get("/get-user-task", isuserloggedin, getusertask);
router.get("/get-all-task", isuserloggedin, getalltask);
router.get("/paginate-task/:page?/:limit?", isuserloggedin, paginateusertask);
router.get("/paginate-tasks/:page?/:limit?", isuserloggedin, paginatetasks);
router.post("/create-task", isuserloggedin, createtask);
router.patch("/update-task", isuserloggedin, updatetask);
router.delete("/delete-user-task-id/:id", isuserloggedin, userdeletebyid);
router.delete("/delete-task-id/:id", isuserloggedin, deletebyid);
router.delete("/delete-all-task", adminonly, deleteall);

module.exports = router;
