const { Pool } = require('pg')
const db = new Pool ({                        // new is creating a pool object
    connectionString: process.env.DB_URL,      //providing a json object - important to remember to curlies!
})

module.exports = db 