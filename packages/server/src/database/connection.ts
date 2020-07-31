/* eslint-disable @typescript-eslint/no-var-requires */
import knex from 'knex'
const configuration = require('../../knexfile')

const connection = knex(configuration.development)

export default connection
