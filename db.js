require('dotenv').config();

const mysql = require("mysql2");

// Credenciais de acesso ao banco

const db = mysql.createConnection({
  host: process.env.DB_HOST, // Lê do .env
  user: process.env.DB_USER, // Lê do .env
  password: process.env.DB_PASS, // Lê do .env
  database: process.env.DB_NAME, // Lê do .env
});

//Estabelece a conexão com o banco

db.connect((err) => {
  if (err) throw err;
  console.log("Conectado ao banco de dados");
});

//Exporta o módulo responsável pela conexão

module.exports = db;
