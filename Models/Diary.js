const { text } = require('express');
const db = require('./db');

exports.addEntry =  async ({entry_date, entry_time, category, text})=>{
    const result = await db.query(
        `INSERT INTO diary_entries (entry_date, entry_time, category, text)
         VALUES ($1, $2, $3, $4)
         RETURNING *`,
         [entry_date, entry_time, category, text]
    );
    return result.rows[0];
}

exports.getAllEntries = async () => {
    const result = await db.query(
        `SELECT * FROM diary_entries ORDER BY entry_date DESC, entry_time DESC`
    );
    return result.rows;
}

exports.deleteEntry = async (id) => {
    const result = await db.query(
        `DELETE FROM diary_entries WHERE id = $1 RETURNING *`,
        [id]
    );
    return result.rows[0];
}

exports.searchByCategory = async (category) => {
    const result = await db.query(
        `SELECT * FROM diary_entries 
        WHERE category LIKE $1 
        ORDER BY entry_date DESC, entry_time DESC`,
        [`%${category}%`]
    );
    return result.rows;
}

exports.updateEntry = async (id, text) => {
    const result = await db.query(
        `UPDATE dairy_entries 
        SET text = $1 
        WHERE id = $2 
        RETURNING *`,
        [text, id]
    );
    return result.rows[0]; 
}