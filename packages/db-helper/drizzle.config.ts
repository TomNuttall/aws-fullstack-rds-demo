import { defineConfig } from 'drizzle-kit'

export default defineConfig({
  schema: './src/schema/**/*.sql.ts',
  out: './migrations',
  dialect: 'mysql',
  breakpoints: true,
  dbCredentials: {
    host: process.env.MYSQL_HOST || '',
    user: process.env.MYSQL_USER || '',
    password: process.env.MYSQL_PASSWORD || '',
    database: process.env.MYSQL_DATABASE || '',
    port: Number(process.env.MYSQL_PORT || ''),
  },
})
