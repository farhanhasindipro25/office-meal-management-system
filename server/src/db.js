import pkg from "pg";
const { Pool } = pkg;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "office_meal_management",
  password: "test",
  port: 5432,
});

export default pool;
