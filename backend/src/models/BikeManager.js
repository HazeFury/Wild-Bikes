const AbstractManager = require("./AbstractManager");

class BikeManager extends AbstractManager {
  constructor() {
    super({ table: "bikes" });
  }

  getPreviewBike() {
    return this.database.query(
      `select * from ${this.table} limit 4 order by id DESC`
    );
  }

  countBikes(age) {
    let query = `SELECT COUNT(*) AS total FROM ${this.table}`;

    const params = [];

    if (age === 1) {
      query += ` order by year ASC`;
      params.push(age);
    } else if (age === 2) {
      query += ` order by year DESC`;
      params.push(age);
    }

    return this.database.query(query, params);
  }

  showEveryBikes(age, limit, offset) {
    let query = `SELECT * FROM ${this.table} as b
    join brand on b.brand_id = brand.id
    join segment on b.segment = segment.id`;

    const params = [];

    if (age === 1) {
      query += ` order by year ASC`;
      params.push(age);
    } else if (age === 2) {
      query += ` order by year DESC`;
      params.push(age);
    }

    query += ` ORDER BY id DESC LIMIT ? OFFSET ?`;
    params.push(limit, offset);

    return this.database.query(query, params);
  }
}

module.exports = BikeManager;
