import connection from './database/connection'

const resolvers = {
  Query: {
    async getUser (_: void, { id }: { id:any }): Promise<any> {
      return await connection('tb_user')
        .where({ id }).first()
    },
    async getUsers (): Promise<any> {
      return await connection('tb_user').select('*')
    }
  },
  Mutation: {
    async createUser (_: void, { input }: {input:any}): Promise<any> {
      const returnData = await connection('tb_user').insert({
        name: input.name,
        email: input.email,
        password: input.password
      })

      const id = returnData[0]
      return await connection('tb_user').where({ id }).first()
    }
  }
}

export default resolvers
