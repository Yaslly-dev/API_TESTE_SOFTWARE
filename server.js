const express = require("express");
const app = express();
const port = 3000;

// Variável responsável por definir o caminho

const path = require("path");

//Informa onde os arquivos estáticos estão

app.use(express.static("public"));

//Conexão com o banco de dados

const db = require("./db");

// Rota que define qual será o arquivo do frontend

app.get("/", (req, res) => {
  //res.send('Front funcionando!');
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

//Linka o arquivo principal (server.js) com o arquivo da API (possui todas as rotas)

const apiRoutes = require("./scripts/api");

// Define que o server.js recebe arquivos do tipo JSON

app.use(express.json());

//Rota padrão - Todos passam por ela

app.use("/api/users/", apiRoutes);

app.listen(port, () => {
  console.log("Servidor funcionando!");
});
