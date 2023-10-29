const { createtask } = require("../task/create.controller");

const {
  getalltask,
  getusertask,
  paginatetasks,
  paginateusertask,
} = require("../task/getalltask.controller");

const { updatetask } = require("../../controllers/task/updatetask.controller");

const {
  deleteall,
  deletebyid,
  userdeletebyid,
} = require("../../controllers/task/deletetask.controller");

module.exports = {
  createtask,
  getalltask,
  getusertask,
  paginatetasks,
  paginateusertask,
  updatetask,
  deleteall,
  deletebyid,
  userdeletebyid,
};
