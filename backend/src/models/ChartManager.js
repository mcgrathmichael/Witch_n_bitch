const AbstractManager = require("./AbstractManager");

class ChartManager extends AbstractManager {
  constructor() {
    super({ table: "birth_charts" });
  }

  insert(birth_charts) {
    return this.database.query(
      `insert into ${this.table} (user_id, birth_date, birth_time, birth_location) values (?, ?, ?, ?)`,
      [
        birth_charts.user_id,
        birth_charts.birth_date,
        birth_charts.birth_time,
        birth_charts.birth_location,
      ]
    );
  }

  update(birth_charts) {
    return this.database.query(
      `update ${this.table} set user_id = ?, birth_date = ?, birth_time=?, birth_location=? where id = ?`,
      [
        birth_charts.user_id,
        birth_charts.birth_date,
        birth_charts.birth_time,
        birth_charts.birth_location,
        birth_charts.id,
      ]
    );
  }
}

module.exports = ChartManager;
