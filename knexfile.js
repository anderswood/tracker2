module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/tourtracker',
    useNullAsDefault: true,
    migrations: { directory: './db/migrations' },
    seeds: { directory: './db/seeds/dev' }
  },
  testing: {
    client: 'pg',
    connection: process.env.DATABASE_URL || 'postgres://localhost/tourtracker_test',
    useNullAsDefault: true,
    migrations: { directory: './db/migrations' },
    seeds: { directory: './db/seeds/test' }
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL + `?ssl=true`,
    migrations: { directory: './db/migrations' },
    useNullAsDefault: true
  }

};
