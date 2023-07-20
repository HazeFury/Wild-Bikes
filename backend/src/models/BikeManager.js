const AbstractManager = require("./AbstractManager");

class BikeManager extends AbstractManager {
  constructor() {
    super({ table: "bikes" });
  }

  getPreviewBike() {
    return this.database.query(
      `SELECT bi.*, br.name brand from ${this.table} as bi
      JOIN brand as br on br.id = bi.brand_id order by bi.id DESC limit 4`
    );
  }

  countBikes() {
    const query = `SELECT COUNT(*) AS total FROM ${this.table}`;

    // const params = [];

    // if (age === 1) {
    //   query += ` order by year ASC`;
    //   params.push(age);
    // } else if (age === 2) {
    //   query += ` order by year DESC`;
    //   params.push(age);
    // }

    return this.database.query(query);
  }

  showEveryBikes(limit, offset) {
    let query = `SELECT bi.*, br.name brand, s.name category FROM ${this.table} as bi
    JOIN brand as br on br.id = bi.brand_id
    JOIN segment as s on s.id = bi.segment_id`;

    const params = [];

    // if (age === 1) {
    //   query += ` order by year ASC`;
    //   params.push(age);
    // } else if (age === 2) {
    //   query += ` order by year DESC`;
    //   params.push(age);
    // }

    query += ` ORDER BY bi.id DESC LIMIT ? OFFSET ?`;
    params.push(limit, offset);

    return this.database.query(query, params);
  }

  createNewBike(newBike) {
    return this.database.query(
      `INSERT INTO ${this.table} (model, year, kilometers, bridle, image_url, color, brand_id, segment_id, price, stock)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        newBike.model,
        newBike.year,
        newBike.kilometers,
        newBike.bridle,
        newBike.image_url,
        newBike.color,
        newBike.brand_id,
        newBike.segment_id,
        newBike.price,
        1,
      ]
    );
  }

  changeDataOfThisBike(thisBike, id) {
    return this.database.query(
      `update ${this.table} set model = ?, year = ?, kilometers  = ?, bridle  = ?, image_url  = ?, color  = ?, brand_id = ?, segment_id = ?, price = ? WHERE id = ?`,
      [
        thisBike.model,
        thisBike.year,
        thisBike.kilometers,
        thisBike.bridle,
        thisBike.image_url,
        thisBike.color,
        thisBike.brand_id,
        thisBike.segment_id,
        thisBike.price,
        id,
      ]
    );
  }

  changeStockOfThisBike(id) {
    return this.database.query(
      `update ${this.table} set stock = 0 WHERE id = ?`,
      [id]
    );
  }

  getDataBike(id) {
    return this.database.query(
      `SELECT bi.* FROM ${this.table} as bi
    JOIN brand as br on br.id = bi.brand_id
    JOIN segment as s on s.id = bi.segment_id
    WHERE bi.id = ?`,
      [id]
    );
  }
}

module.exports = BikeManager;
