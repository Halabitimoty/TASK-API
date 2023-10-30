const logindata = {
  email: "Test@gmail.com",
  password: "Test1234",
};

const registerdata = {
  fullname: "Test Test",
  ...logindata,
  role: "admin",
  profilepicture: "image.jpg",
};

const createtaskdata = {
  title: "Test Title",
  description: "This is Test Title Description",
  published: false,
};

const updatedata = { ...createtaskdata };

module.exports = { logindata, registerdata, createtaskdata, updatedata };
