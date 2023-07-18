const models = require("../models");

const getUserList = (req, res) => {
  models.user
    .selectAllUSer()
    .then(([rows]) => {
      res.send(rows[0]);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("There is a problem");
    });
};

module.exports = {
  getUserList,
};
