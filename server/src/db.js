const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "office-meal-management-system",
  password: "test",
  port: 5432,
});

export default pool;
