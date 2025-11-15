const express = require("express"); //Importa o 'express'
const router = express.Router(); //modularizar as rotas

//Conexão com o banco

const db = require("../db");

// Rota de cadastro do usuário

router.post("/", (req, res) => {
  //JSON
  const { nome, email } = req.body;

  db.query(
    "INSERT INTO users (nome, email) VALUES (?, ?)",
    [nome, email],

    // Tratamento de erros

    (err, result) => {
      if (err) return res.status(500).send(err); // 500 -> Erro de servidor
      res.status(201).json({ id: result.insertID, nome, email }); // 201 -> Sucesso
    }
  );
});

//  Rota para apresentar os usuários cadastrados

router.get("/", (req, res) => {
  db.query("SELECT * FROM users", (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

//  Rota para editar os usuários cadastrados

router.put('/:id', (req, res) =>{
  const {nome, email} = req.body; //Informações que vem do corpo da requisição
  const {id} = req.params;

  db.query('UPDATE users SET nome = ?, email = ? WHERE id = ?', [nome, email,id],
    (err) => {
      if (err) return res.status(500).send(err);
      res.json({ id, nome, email });
    })
});

// Rota para excluir os usuários cadastrados

router.delete("/:id", (req, res) => {
  const { id } = req.params;

  db.query("DELETE FROM users WHERE id = ? ", [id], (err) => {
    if (err) return res.status(500).send(err);
    res.sendStatus(204);
  });
});

//Exporta o módulo para que seja utilizado por outros arquivos

module.exports = router;
