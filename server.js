// import mysql2 package (2)
const mysql = require('mysql2');
// import express and port (1)
const express = require ('express');
const PORT = process.env.PORT || 3001;
const app = express();

// Adding Express middleware (1)
app.use(express.urlencoded({extended: false}));
app.use(express.json());
// connecting the mysql database (2)
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',  // this is mysql user name
        password: 'Shaon3512', // my sql password
        database: 'election_db'
       },
       console.log('Connected to the election_db database')
);
// To build a database calls
// to test the connection type the fol statement above catchall route to return
// all the date in candidates table     (3)
// db.query(`select * from candidates`, (err, rows) => {
//     console.log(rows);
// });

// to get a single candidate  (4)
// db.query('select * from candidates where id = 1', (err, row) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(row);
// });


// to create query for delete operation  (5)
// db.query('delete from candidates where id = ?', 1, (err, result) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(result);
// });

// To create a candidate  (6)
const sql = `INSERT INTO candidates (id, first_name, last_name, industry_connected) 
              VALUES (?,?,?,?)`;
const params = [1, 'Ronald', 'Firbank', 1];

db.query(sql, params, (err, result) => {
  if (err) {
    console.log(err);
  }
  console.log(result);
});






// test the express.js connection (1)
// app.get('/', (req, res) =>{
//     return res.json({
//         message: "Hello World"
//     });
// });








// Default response for any other request (Not Found) (2)
// This route will override all others—so make sure that this is the last one.
app.use((req, res) => {
    res.status(404).end();
  });
// add function that will start the express.js server on port 3001  (1)
// this code will be added at the bottom of the server.js file
app.listen(PORT, () => {
    console.log(`Server is running on Port ${PORT}`);
});