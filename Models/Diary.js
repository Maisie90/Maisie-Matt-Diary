const { text } = require('express');
const db = require('./db');

exports.addEntry =  async ({id, date, time, category, diary_entry})=>{
    const result = await db.query(
        `INSERT INTO diary (id, date, time, category, diary_entry)
         VALUES ($1, $2, $3, $4, $5)
         RETURNING *`,
         [id, date, time, category, diary_entry]
    );
    return result.rows[0];
}

exports.getAllEntries = async () => {
    const result = await db.query(
        `SELECT * FROM diary ORDER BY date DESC, time DESC`
    );
    return result.rows;
}

exports.deleteEntry = async (id) => {
    const result = await db.query(
        `DELETE FROM diary WHERE id = $1 RETURNING *`,
        [id]
    );
    return result.rows[0];
}

exports.searchByCategory = async (category) => {
    const result = await db.query(
        `SELECT * FROM 
        WHERE category LIKE $1 
        ORDER BY date DESC, time DESC`,
        [`%${category}%`]
    );
    return result.rows;
}

exports.updateEntry = async (id, diary_entry) => {
    const result = await db.query(
        `UPDATE diary
        SET diary_entry = $1 
        WHERE id = $2 
        RETURNING *`,
        [diary_entry, id]
    );
    return result.rows[0]; 
}