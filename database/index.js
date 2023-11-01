import mysql from "mysql2"
import dotenv from "dotenv";
dotenv.config();

const pool = mysql.createPool({
    host: process.env.DB_HOST, 
    user: process.env.DB_USERNAME, 
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DBNAME,
    ssl:{
        rejectUnauthorized: true
    },
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

//const pool = mysql.createPool(process.env.DATABASE_URL)

pool.getConnection((err, conn) => {
    if(err) console.log(err)
    console.log("Connected successfully")
})

export default pool.promise()