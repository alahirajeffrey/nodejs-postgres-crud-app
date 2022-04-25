const { Pool } = require('pg')

const pool = new Pool({
    user: process.env.USER,
    host: process.env.HOST,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    port: process.env.DB_PORT,
})

module.exports = {
    query: (text, params, callback) => {
        return pool.query(text, params, callback)
    },
}