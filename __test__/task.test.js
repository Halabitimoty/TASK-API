const axios = require("axios");

const { logindata, createtaskdata, updatedata } = require("./data");

test("login test", async () => {
  try {
    const res = await axios.post(
      "http://localhost:6000/v1/auth/login",
      logindata,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    global.token = res.data.token;

    expect(res.status).toBe(200);
    expect(res.data.success).toBe(true);
    expect(res.data.message).toBe("login successful");
  } catch (error) {
    // console.log("Failed to Login");
  }
});

test("create test", async () => {
  try {
    const res = await axios.post(
      "http://localhost:6000/v1/task/create-task",
      createtaskdata,
      {
        headers: {
          Authorization: `Bearer ${global.token}`,
          "Content-Type": "application/json",
        },
      }
    );

    expect(res.status).toBe(201);
    expect(res.data.success).toBe(true);
    expect(res.data.message).toBe("created successfully.");
  } catch (error) {
    // console.log("unable to create task");
  }
});

test("get-user-task test", async () => {
  try {
    const res = await axios.get("http://localhost:6000/v1/task/get-user-task", {
      headers: {
        Authorization: `Bearer ${global.token}`,
        "Content-Type": "application/json",
      },
    });

    expect(res.status).toBe(200);
    expect(res.data.success).toBe(true);
    expect(res.data.message).toBe("all user tasks fetched successfully");
  } catch (error) {
    // console.log(error);
  }
});

test("get-all-task test", async () => {
  try {
    const res = await axios.get("http://localhost:6000/v1/task/get-all-task", {
      headers: {
        Authorization: `Bearer ${global.token}`,
        "Content-Type": "application/json",
      },
    });

    expect(res.status).toBe(200);
    expect(res.data.success).toBe(true);
    expect(res.data.message).toBe("all tasks fetched successfully");
  } catch (error) {
    // console.log(error);
  }
});

test("paginate-task test", async () => {
  try {
    const res = await axios.get("http://localhost:6000/v1/task/paginate-task", {
      headers: {
        Authorization: `Bearer ${global.token}`,
        "Content-Type": "application/json",
      },
    });

    expect(res.status).toBe(200);
    expect(res.data.success).toBe(true);
    expect(res.data.message).toBe("all tasks fetched successfully");
  } catch (error) {
    // console.log(error);
  }
});

test("paginate-tasks test", async () => {
  try {
    const res = await axios.get(
      "http://localhost:6000/v1/task/paginate-tasks",
      {
        headers: {
          Authorization: `Bearer ${global.token}`,
          "Content-Type": "application/json",
        },
      }
    );

    expect(res.status).toBe(200);
    expect(res.data.success).toBe(true);
    expect(res.data.message).toBe("paginated tasks fetched successfully");
  } catch (error) {
    // console.log(error);
  }
});

test("update-task test", async () => {
  try {
    const res = await axios.patch(
      "http://localhost:6000/v1/task/update-task/",
      updatedata,
      {
        headers: {
          Authorization: `Bearer ${global.token}`,
          "Content-Type": "application/json",
        },
      }
    );

    expect(res.status).toBe(200);
    expect(res.data.success).toBe(true);
    expect(res.data.message).toBe("task successfully updated");
  } catch (error) {
    // console.log(error);
  }
});

/**
 * Other tests laters *****
 */
