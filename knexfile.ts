import type { Knex } from "knex";
import dotenv from "dotenv";

dotenv.config()

// Update with your config settings.

const config: { [key: string]: Knex.Config } = {
    development: {
        client: 'mysql2',
        connection: process.env.DATABASE_URL,
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            tableName: "knex_migrations",
            directory: "./db/migrations"
        },
        seeds: {
            directory: "./db/seeds"
        }
    },

    production: {
        client: 'mysql2',
        connection: process.env.DATABASE_URL,
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            tableName: "knex_migrations",
            directory: "./db/migrations"
        }
    }
};

export default config
