/* eslint-disable no-undef */
class AbstractManager{
  constructor({table}){
    this.table = table;
  }
  findAll() {
    return this.pool.query(`select * from  ${this.table} limit 20`);
  }
  find(id){
    console.log("ID passed to find method:", id); 
    return this.pool.query(`select * from ${this.table} where idword = ?`, 
      [id]);
  }
  setDatabase(pool){
    this.pool = pool;
  }
}
module.exports = AbstractManager;