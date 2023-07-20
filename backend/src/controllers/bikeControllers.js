const models = require("../models");

const getBikeForPreview = (req, res) => {
  models.bike
    .getPreviewBike()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("There is a problem");
    });
};

const getAllBikesInStock = async (req, res) => {
  const { page } = req.query;
  const limit = 10;
  const offset = (page - 1) * limit;
  try {
    const [[{ total }]] = await models.bike.countBikes();

    const [bikes] = await models.bike.showEveryBikes(limit, offset);

    res.send({ total, datas: bikes });
  } catch (err) {
    console.error(err);
    res.status(500).send("Erreur interne");
  }
};

const deleteThisBike = (req, res) => {
  models.bike
    .delete(req.params.id)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const createBike = (req, res) => {
  const newBike = req.body;
  models.bike
    .createNewBike(newBike)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(203);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const getInfoOfThisBike = (req, res) => {
  models.bike
    .getDataBike(req.params.id)
    .then(([rows]) => {
      res.send(rows[0]);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const modifyThisBike = (req, res) => {
  const thisBike = req.body;
  models.bike
    .changeDataOfThisBike(thisBike, req.params.id)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(200);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const soldThisBike = (req, res) => {
  models.bike
    .changeStockOfThisBike(req.params.id)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(200);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  getBikeForPreview,
  getAllBikesInStock,
  deleteThisBike,
  createBike,
  getInfoOfThisBike,
  modifyThisBike,
  soldThisBike,
};
