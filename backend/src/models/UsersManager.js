const AbstractManager = require("./AbstractManager");

class UsersManager extends AbstractManager {
  constructor() {
    super({ table: "users" });
  }

  insert(users) {
    return this.database.query(
      `insert into ${this.table} (name, email, hashedPassword, starsign) values (?, ?, ?, ?)`,
      [users.name, users.email, users.hashedPassword, users.starsign]
    );
  }

  update(users) {
    return this.database.query(
      `update ${this.table} set name = ?, email= ?, hashedPassword=?, starsign=?  where id = ?`,
      [users.name, users.email, users.hashedPassword, users.starsign, users.id]
    );
  }

  login(users) {
    return this.database.query(`SELECT * FROM ${this.table} WHERE email = ?`, [
      users.email,
    ]);
  }
}

module.exports = UsersManager;
