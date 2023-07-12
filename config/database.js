const mariadb = require('mariadb');

const pool = mariadb.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Duana2022*',
  database: 'endeavour',
  connectionLimit: 5, // número máximo de conexiones permitidas
  charset: 'utf8mb4',
});

module.exports = pool;
