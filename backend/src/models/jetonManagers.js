/* eslint-disable no-undef */
const AbstractManager = require('./AbstractManager');
class JetonManagers extends AbstractManager{
  constructor(){
    super({
      table: "jeton",
    })
  }
  addJeton(el) {
    return this.pool.query(
      `INSERT INTO ${this.table} (jetonimg) VALUES (?)`,
      [el]
    );
  }
  delete(id){
    return this.pool.query(
      `DELETE FROM ${this.table} WHERE idjeton=?`,
      [id]
    );
  }
}
module.exports = JetonManagers;
