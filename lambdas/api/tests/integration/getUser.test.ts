import { type MySql2Database } from 'drizzle-orm/mysql2'
import mysql from 'mysql2/promise'
import { schema } from '@tn/db-helper'
import { getTestDb } from '../mocks/test-db'
import { userFixture } from '../mocks/fixtures'
import { getUser } from '../../src/context/utils/getUser'

describe('getUser', () => {
  // Arrange
  let orm: MySql2Database<typeof schema>
  let pool: mysql.Pool

  beforeAll(async () => {
    const testDb = getTestDb()
    orm = testDb.orm
    pool = testDb.poolConnection
  })

  afterAll(async () => {
    pool.end()
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
