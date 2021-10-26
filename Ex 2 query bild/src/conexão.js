const knex = require('knex')({
    client: 'pg',
    connection: {
        host: 'localhost',
        user: 'postgres',
        password: 'MeLo5047@',
        database: 'ex_query_builder'
    }
})
module.exports = knex;