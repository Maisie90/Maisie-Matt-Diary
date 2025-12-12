const db = require("../db/connect.js");

class Diary {
  constructor({ id, date, time, category, diary_entry }) {
    this.id = id;
    this.date = date;
    this.time = time;
    this.category = category;
    this.diary_entry = diary_entry;
  }

  static addEntry = async ({ category, diary_entry }) => {
    const result = await db.query(
      `INSERT INTO diary (category, diary_entry)
         VALUES ($1, $2)
         RETURNING *`,
      [category, diary_entry]
    );
    return result.rows[0];
  };

  static getAllEntries = async () => {
    const result = await db.query(
      `SELECT * FROM diary ORDER BY date DESC, time DESC`
    );
    return result.rows;
  };

  static deleteEntry = async (id) => {
    const result = await db.query(
      `DELETE FROM diary WHERE id = $1 RETURNING *`,
      [id]
    );
    return result.rows[0];
  };

  static searchByCategory = async (category) => {
    const result = await db.query(
      `SELECT * FROM diary
        WHERE LOWER(category) LIKE LOWER($1) 
        ORDER BY date DESC, time DESC`,
      [`%${category}%`]
    );
    return result.rows;
  };

  static updateEntry = async (id, diary_entry) => {
    const result = await db.query(
      `UPDATE diary
        SET diary_entry = $1 
        WHERE id = $2 
        RETURNING *`,
      [diary_entry, id]
    );
    return result.rows[0];
  };
}

module.exports = Diary;
