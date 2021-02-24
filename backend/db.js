const Pool = require('pg').Pool
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'itg',//ITG
    password: '200999',
    port: 5432,
});


module.exports= pool;