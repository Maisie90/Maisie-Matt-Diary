require ('dotenv').config()
const fs = require('fs')

const db = require('./connect')

const sql = fs.readFileSync('./db/diaryEntries.sql').toString()  // sql represents this file

db.query(sql)                               // pool object we created earlier //connect to the database
    .then((data) => {                           // run this query
        db.end()                                // then end when finished
        console.log('Setup complete');
    })
        .catch((error) => console.log(error))  //log error if something goes wrong