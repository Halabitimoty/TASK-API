const { taskcollection } = require("../../schemas/task.schema");
const { createval } = require("../../schemas/joischema/task.val");

const createtask = async (req, res) => {
  try {
    const { userid } = req.decoded;
    const { title, description, published } = req.body;
    await createval.validateAsync({ title, description, published });

    const task = await taskcollection.create({
      title,
      description,
      published,
      createBy: userid,
    });

    res.status(201).send({
      success: true,
      message: "created successfully.",
      data: task,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      error: error.message || "Unable to create task.",
      message: "Unable to create task.",
    });
  }
};

module.exports = { createtask };
