const adminonly = (req, res, next) => {
  const { role } = req.decoded;

  if (role === "admin") {
    next();
  } else {
    res.status(403).send("you are not an admin");
  }
};

module.exports = { adminonly };
