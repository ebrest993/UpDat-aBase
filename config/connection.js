const mysql = require('mysql2');

let db = null;

module.exports = {
  mysql: () => {
    if (!db) {
      db = mysql.createConnection(
        {
          host: '127.0.0.1',
          user: 'root',
          password: 'bootcamp',
          database: 'movies_db'
        },
        console.log(`Connected to the movies_db database.`)
      );
    }

    return db;
  }
};
