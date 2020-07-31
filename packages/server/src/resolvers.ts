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
    async createUser (_: void, { input }: { input:any }): Promise<any> {
      const returnData = await connection('tb_user').insert({
        name: input.name,
        email: input.email,
        password: input.password
      })

      const id = returnData[0]
      return await connection('tb_user').where({ id }).first()
    },
    async updateUser (_: void, { id, input }: { id: number, input:any }): Promise<any> {
      const user = await connection('tb_user').where({ id }).first()

      if (!user) {
        const error = new Error()
        return console.error(error)
      }

      try {
        await connection('tb_user').where({ id }).update({
          name: input.name,
          email: input.email,
          password: input.password
        })

        return await connection('tb_user').where({ id }).first()
      } catch (error) {
        return error
      }
    },
    async deleteUser (_: void, { id }: { id: number}): Promise<any> {
      const user = await connection('tb_user').where({ id }).first()

      if (!user) {
        const error = new Error()
        return console.error(error)
      }

      try {
        return await connection('tb_user').where({ id }).del()
      } catch (error) {
        return error
      }
    }
  }
}

export default resolvers
