const knex = require('knex')({
    client: 'pg',
    connection: {
        host: process.env.DATABASE_HOST,
        user: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_NAME,
        port: process.env.DATABASE_PORT,
        ssl: {
            rejectUnauthorized: false, // For self-signed certificates
          },
    },
})
module.exports = knex;