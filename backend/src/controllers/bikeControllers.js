const models = require("../models");

const getBikeForPreview = (req, res) => {
  models.bike
    .getPreviewBike()
    .then(([rows]) => {
      res.send(rows[0]);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("There is a problem");
    });
};

const getAllBikesInStock = async (req, res) => {
  const { status } = req.query;
  const { page } = req.query;
  const limit = 10;
  const offset = (page - 1) * limit;

  try {
    const [[{ total }]] = await models.bike.countBikes(status);

    const [bikes] = await models.dashboardpro.showEveryBikes(
      limit,
      offset,
      status
    );

    res.send({ total, datas: bikes });
  } catch (err) {
    console.error(err);
    res.status(500).send("Erreur interne");
  }
};

module.exports = {
  getBikeForPreview,
  getAllBikesInStock,
};
