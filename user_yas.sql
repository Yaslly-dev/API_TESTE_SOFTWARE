CREATE DATABASE user_yas;

use user_yas;

CREATE TABLE users(

id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
nome VARCHAR(250) NOT NULL,
email VARCHAR(200) NOT NULL
);

INSERT INTO users (nome, email) VALUES ('Ana Silva', 'ana.silva@exemplo.com');
INSERT INTO users (nome, email) VALUES ('Bruno Santos', 'bruno.santos@exemplo.com');
INSERT INTO users (nome, email) VALUES ('Carla Oliveira', 'carla.oliveira@exemplo.com');
INSERT INTO users (nome, email) VALUES ('Daniel Souza', 'daniel.souza@exemplo.com');
INSERT INTO users (nome, email) VALUES ('Eduarda Costa', 'eduarda.costa@exemplo.com');
INSERT INTO users (nome, email) VALUES ('Felipe Pereira', 'felipe.pereira@exemplo.com');
INSERT INTO users (nome, email) VALUES ('Gabriela Lima', 'gabriela.lima@exemplo.com');
INSERT INTO users (nome, email) VALUES ('Henrique Alves', 'henrique.alves@exemplo.com');
INSERT INTO users (nome, email) VALUES ('Isabela Rocha', 'isabela.rocha@exemplo.com');
INSERT INTO users (nome, email) VALUES ('João Ferreira', 'joao.ferreira@exemplo.com');