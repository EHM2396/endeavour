// import pool from '../../config/db';

// export default async function handler(req, res) {
//   let conn;
//   try {
//     conn = await pool.getConnection();
//     const rows = await conn.query('SELECT * FROM usuarios');
//     res.status(200).json(rows);
//   } catch (error) {
//     console.error('Error executing query', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   } finally {
//     if (conn) {
//       conn.end();
//     }
//   }
// }


const pool = require('../../config/database');

async function testDatabaseConnection() {
  let conn;
  try {
    conn = await pool.getConnection();

    // Ejecutar una consulta SELECT de prueba
    const rows = await conn.query('SELECT id, nombre, apellido, usuario, CAST(aes_decrypt(password, "keyduana") AS CHAR) as password FROM usuarios');

    console.log('Resultado de la consulta:', rows);
  } catch (error) {
    console.error('Error al conectar o ejecutar la consulta:', error);
  } finally {
    if (conn) {
      conn.release(); // Liberar la conexión de vuelta al pool
    }
  }
}

testDatabaseConnection();
