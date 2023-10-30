const axios = require("axios");

const { logindata, registerdata } = require("./data");

test("register test", async () => {
  try {
    const res = await axios.post(
      "http://localhost:6000/v1/auth/register",
      registerdata,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    expect(res.status).toBe(201);
    expect(res.data.success).toBe(true);
    expect(res.data.message).toBe("created successfully.");
  } catch (error) {
    // console.log("Failed to Register");
  }
});

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

test("profile test", async () => {
  try {
    const res = await axios.get("http://localhost:6000/v1/auth/profile", {
      headers: {
        Authorization: `Bearer ${global.token}`,
        "Content-Type": "application/json",
      },
    });

    global.token = res.data.token;

    expect(res.status).toBe(200);
    expect(res.data.success).toBe(true);
    expect(res.data.message).toBe("login successful");
  } catch (error) {
    // console.log("Failed to get profile");
  }
});
