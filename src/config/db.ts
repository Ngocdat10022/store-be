import { createPool } from "mysql2/promise";
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_USER } from "@/config";
 const connection = async () => {
  const pool = await createPool({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    port: 3306,
    connectionLimit: 10,
  });
  return pool;
};
const db = connection()
export default db