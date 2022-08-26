const { Pool } = require('pg')

const pool  = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'DB_SCP_TEST',
    password: '12345',
    port: 5433,
})

module.exports = {
    pool
}