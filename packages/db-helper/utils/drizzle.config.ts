import { defineConfig } from 'drizzle-kit'

export default defineConfig({
  schema: './../src/schema/**/*.sql.ts',
  out: './../migrations',
  dialect: 'mysql',
  breakpoints: true,
  dbCredentials: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
  },
})
