/* eslint-disable no-undef */
const AbstractManager = require('./AbstractManager');
class WordManagers extends AbstractManager{
  constructor(){
    super({
      table: "words",
    })
  }
  findByInitial(initial,len){
    return this.pool.query(
      `SELECT word, length(word) FROM ${this.table} WHERE word LIKE ? AND length(word) = ?`,
      [`${initial}%`, len]
    );
  }

  findByFinale(finale,len){
    return this.pool.query(
      `SELECT word, length(word) FROM ${this.table} WHERE word LIKE ? AND length(word) = ?`,
      [`%${finale}`, len]
    );
  }

  findByGroup(group,len){
    return this.pool.query(
      `SELECT word, length(word) FROM ${this.table} WHERE word LIKE ? AND length(word) = ?`,
      [`%${group}%`, len]
    );
  }
 
  findByVisited(){
    return this.pool.query(
      `SELECT word FROM ${this.table} WHERE visited !=0 ORDER BY visited DESC;`
    );
  }
  update(id, el){
    return this.pool.query(
      `UPDATE ${this.table} SET visited = ? WHERE idword = ?`,
      [el,id]
    );
  }
  addWorld(el) {
    return this.pool.query(
      `INSERT INTO ${this.table} (word) VALUES (?)`,
      [el]
    );
  }
  delete(id){
    return this.pool.query(
      `DELETE FROM ${this.table} WHERE idword=?`,
      [id]
    );
  }
}
module.exports = WordManagers;