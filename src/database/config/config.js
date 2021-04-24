require("dotenv").config();

export const development = {
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  host: process.env.DATABASE_HOST,
  logging: false,
  dialect: "postgres"
};
export const test = {
  username: process.env.TEST_DATABASE_USERNAME,
  password: process.env.TEST_DATABASE_PASSWORD,
  database: process.env.TEST_DATABASE_NAME,
  host: process.env.TEST_DATABASE_HOST,
  logging: false,
  dialect: "postgres"
};
export const production = {
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  host: process.env.DATABASE_HOST,
  logging: false,
  dialect: "postgres"
};
