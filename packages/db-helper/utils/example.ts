import { getDbConnection } from '../src/database.js'
import * as schema from '../src/schema/index.js'

const { orm, poolConnection } = getDbConnection({
  host: process.env.MYSQL_HOST,
  port: Number(process.env.MYSQL_PORT),
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
})

const values = await orm.select().from(schema.card)
console.log(values)

await poolConnection.end()
