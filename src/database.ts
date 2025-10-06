import { env } from './env/index.js'
import Knex from 'knex'
import type { Knex as KnexType } from 'knex'
import 'dotenv/config'

export const config: KnexType.Config = {
    client: env.DATABASE_CLIENT,
    connection: 
        env.DATABASE_CLIENT === 'sqlite'
        ? {
            filename: env.DATABASE_URL,
          } 
        : env.DATABASE_URL,
    useNullAsDefault: true,
    migrations: {
        extension: 'ts',
        directory: './db/migrations'
    }
}

export const knex = Knex(config)
