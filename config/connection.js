const mysql = require('mysql2');

const db = mysql.createConnection(
  {
    host: '127.0.0.1',
    user: 'root',
    password: 'abracadabra',
    database: 'tracker_db'
  },
  console.log(`Connected to the tracker_db database.`)
);



db.query(`DELETE FROM employee WHERE id = ?`, 2, (err, result) => {
  if (err) {
    console.log(err);
  }
  console.log(result);
});
