INSERT INTO usuarios (nome, email, senha, telefone) VALUES ('nome', 'email@email.com', 'senha123', '31999999999');

SELECT * FROM usuarios WHERE email = 'email@email.com' AND senha = 'senha123';

UPDATE usuarios
SET telefone = '31999999999'
WHERE id = 1;

DELETE FROM usuarios WHERE id = 1;






INSERT INTO trabalhadores (user_id, habilidades, experiencia, localizacao, disponibilidade, taxa_horaria) VALUES (1, 'Obras', '10 anos', 'Belo Horizonte', '06:00 - 17:00', 50);

SELECT * FROM trabalhadores WHERE user_id = 1;

UPDATE trabalhadores
SET localizacao = 'Belo Horizonte'
WHERE user_id = 1;

DELETE FROM trabalhadores WHERE user_id = 1;






INSERT INTO servicos (descricao, categoria, preco) VALUES ('descricao', 'categoria', 10);

SELECT * FROM servicos WHERE categoria = 'categoria';

UPDATE servicos
SET descricao = 'Pedreiro Experiente'
WHERE id = 1;

DELETE FROM servicos WHERE id = 4;





INSERT
	INTO
	contratantes (user_id,
	descricao,
	prazo,
	localizacao,
	disponibilidade)
VALUES (1,
'Desejo realizar obras na minha residência',
'2023-05-07 21:11:35',
'Belo Horizonte',
'06:00 - 17:00');

SELECT * FROM contratantes WHERE user_id = 4;

UPDATE contratantes
SET localizacao = 'Belo Horizonte'
WHERE user_id = 4;

DELETE FROM contratantes WHERE user_id = 4;






INSERT INTO contratacao (servico_id, contratante_id, trabalhador_id, `data`) VALUES (1, 4, 1,'2023-05-07 21:11:35');

SELECT * FROM contratacao WHERE trabalhador_id = 1;

UPDATE contratacao
SET `data` = '2023-05-07 21:11:35'
WHERE servico_id = 1;

DELETE FROM contratacao WHERE servico_id = 1;





INSERT INTO avaliacoes (servico_id, contratacao_id, nota, comentario, `data`) VALUES (1, 4, 5, 'Excelente!', '2023-05-07 21:11:35');

SELECT * FROM avaliacoes WHERE servico_id = 1;

UPDATE avaliacoes
SET comentario = 'Muito bom!'
WHERE servico_id = 1;

DELETE FROM avaliacoes WHERE servico_id = 1;

