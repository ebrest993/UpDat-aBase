const mysql = require('mysql2');

let db = null;

module.exports = {
  mysql: () => {
    if (!db) {
      db = mysql.createConnection(
        {
          host: '127.0.0.1',
          user: 'root',
          password: 'abracadabra',
          database: 'tracker_db'
        },
        console.log(`Connected to the tracker_db database.`)
      );
    }

    return db;
  }
};
