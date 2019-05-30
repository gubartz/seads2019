DROP TABLE IF EXISTS espera;

CREATE TABLE espera(
  id int AUTO_INCREMENT PRIMARY KEY,
  nome varchar(100) NOT NULL,
  qtde int NOT NULL,
  data_cadastro timestamp DEFAULT current_timestamp
);

INSERT INTO espera(nome, qtde) 
VALUES ('Maria', 5);

INSERT INTO espera(nome, qtde) 
VALUES ('João', 10);

INSERT INTO espera(nome, qtde) 
VALUES ('José', 2);