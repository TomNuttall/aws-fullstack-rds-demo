import { describe, it, expect, afterAll, afterEach } from 'vitest'
import { schema, getDbConnection } from '@tn/db-helper'
import { userFixture } from '../mocks/fixtures'
import { getUser } from '../../src/context/utils/getUser'

const { orm, poolConnection } = getDbConnection({
  host: process.env.MYSQL_HOST,
  port: Number(process.env.MYSQL_PORT),
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
})

describe('Query Resolvers', () => {
  // Arrange
  afterAll(async () => {
    poolConnection.end()
  })

  afterEach(async () => {
    await orm.delete(schema.user)
  })

  it('returns exisiting user id', async () => {
    // Arrange
    const [{ insertId: userId }] = await orm
      .insert(schema.user)
      .values(userFixture)

    // Act
    const res = await getUser(userFixture.userHash, orm)

    // Assert
    expect(res).toEqual(userId)
  })

  it('returns user id when no match', async () => {
    // Arrange

    // Act
    const res = await getUser(userFixture.userHash, orm)

    // Assert
    expect(res).toBeTruthy()
  })
})
