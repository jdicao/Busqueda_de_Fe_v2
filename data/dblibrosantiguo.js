const sqlite3 = require('sqlite3').verbose();

// Abre la base de datos en modo de lectura
const db = new sqlite3.Database('./data/bilbia.db', sqlite3.OPEN_READONLY, (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Conectado a la base de datos SQLite');
});

// Función para obtener los datos de libros antiguos
const getLibrosAntiguos = () => {
  return new Promise((resolve, reject) => {
    const query = "select id_libro,abreviacion,qnt_capitulos,nombre from libros where testamento = 'Antiguo'";
    db.all(query, (err, rows) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(rows);
    });
  });
};

module.exports = { getLibrosAntiguos };
