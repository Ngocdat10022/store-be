import mysql from "mysql2";
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_USER } from "@/config";
 const db =  
  mysql.createConnection({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    port: 3306,
    connectionLimit: 10,
  })

export default db