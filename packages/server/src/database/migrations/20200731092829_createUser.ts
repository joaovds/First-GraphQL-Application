import * as Knex from 'knex'

exports.up = (knex: Knex): Promise<void> => knex.schema.createTable('tb_user', table => {
  table.increments('id').primary()
  table.string('name', 80).notNullable()
  table.string('email', 100).notNullable().unique()
  table.string('password', 50).notNullable()
})

exports.down = (knex: Knex): Promise<void> => knex.schema.dropTable('tb_user')
